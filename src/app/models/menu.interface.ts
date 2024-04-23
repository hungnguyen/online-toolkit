export interface IMenu{
    path: string;
    label: string;
    icon: React.ReactNode;
    children: IMenu[]
}