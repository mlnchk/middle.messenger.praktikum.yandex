export type Props = {
    name?: string;
    className?: string;
    body?: string;
    text?: string;
    type?: string;
    validationType?: string;
    required?: boolean;
    value?: string;
    disabled?: boolean;
    errorMessage?: string;
    novalidate?: true;
    events?: {
        [key: string]: (event: Event) => void;
    };
    settings?: {
        withInternalID: boolean;
    };
} & Record<string, unknown>;
