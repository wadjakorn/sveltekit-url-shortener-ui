export interface LayoutData {
    pathName: string | undefined;
    private: boolean;
    menus: Array<{
        label: string;
        slug: string;
    }>;
}

export interface PrivateLayoutData extends LayoutData {}

export interface PublicLayoutData extends LayoutData {}