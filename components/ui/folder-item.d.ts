import Component from '@glimmer/component';
interface UiFolderItemArgs {
    item: unknown;
}
export default class UiFolderItem extends Component<UiFolderItemArgs> {
    open: boolean;
    toggle(): void;
}
export {};
