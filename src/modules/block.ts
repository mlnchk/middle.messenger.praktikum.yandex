import { EventBus } from "./event-bus";
import { Props } from "../types";
import { v4 as uuidv4 } from "uuid";

class Block {
    private static EVENTS = {
      INIT: "init",
      FLOW_CDM: "flow:component-did-mount",
      FLOW_CDU: "flow:component-did-update",
      FLOW_RENDER: "flow:render"
    };

    private _element: HTMLElement;
    private _meta: {
        tagName: string;
        props: Props;
    };

    state: any;
    private _id: string;
    protected props: Props;
    private eventBus: () => EventBus;

    constructor (tagName: string = "div", props: Props) {
      const eventBus: EventBus = new EventBus();
      this._meta = {
        tagName,
        props
      };
      this._id = uuidv4();
      this.props = this._makePropsProxy(props);

      this.eventBus = () => eventBus;

      this._registerEvents(eventBus);
      eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents (eventBus: EventBus) {
      eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
      eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
      eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
      eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }

    _createResources () {
      const { tagName } = this._meta;
      this._element = this._createDocumentElement(tagName);
    }

    init () {
      this._createResources();
      this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidMount () {
      this.componentDidMount();
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidMount () { }

    _componentDidUpdate (oldProps: Props, newProps: Props) {
      const response = this.componentDidUpdate(oldProps, newProps);
      if (!response) {
        return;
      }
      this._render();
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidUpdate (oldProps: Props, newProps: Props) {
      if (oldProps === newProps) {
        return true;
      }
    }

    setProps = (nextProps: Props) => {
      if (!nextProps) {
        return;
      }

      Object.assign(this.props, nextProps);
    };

    get element (): HTMLElement {
      return this._element;
    }

    _render () {
      const block = this.render();
      this._element.innerHTML = block;
      this._addEvents();
    }

    render (): string {
      return "";
    }

    toString (): string {
      const wrapper = document.createElement("div");
      wrapper.appendChild(this.getContent());
      return wrapper.innerHTML;
    }

    getContent () {
      return this.element;
    }

    getId () {
      return this._id;
    }

    _makePropsProxy (props: Props): Props {
      props = new Proxy(props, {
        set (target, prop: string, value: unknown): boolean {
          target[prop] = value;
          this.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
          return true;
        },
        get (target, prop: string): Function {
          const value = target[prop];
          return typeof value === "function" ? value.bind(target) : value;
        },
        deleteProperty (): boolean {
          throw new Error("нет доступа");
        }
      });
      return props;
    }

    _createDocumentElement (tagName: string) {
      const element = document.createElement(tagName);
      return element;
    }

    _addEvents () {
      const { events = {} } = this.props;
      Object.keys(events).forEach(eventName => {
        (document.querySelector("#root") as HTMLElement).addEventListener(eventName, (e: Event) => {
          this._callEventFunction(e, events[eventName]);
        }, true);
      });
    }

    _callEventFunction (e: Event, eventFn: Function) {
      const target = e.target;
      const dataId = (<any>target).getAttribute(["data-id"]);

      if (target != null) {
        if (dataId === this._id) {
          e.preventDefault();
          eventFn.bind(this);
          eventFn(e);
        }
      }
    }

    _removeEvents () {
      const { events = {} } = this.props;
      Object.keys(events).forEach(eventName => {
        (<any>window).removeEventListener(eventName, (e: Event) => {
          this._callEventFunction(e, events[eventName]);
        });
      });
    }
}

export { Block };
