export interface Template {
    library: string;
    component: string;
}

export interface Buttons {
    id: string;
    name: string;
}

export interface ItemAccordion {
    name: string;
    icon?: string;
    path: string;
    template?: Template;
    buttons?: Buttons[];
}
