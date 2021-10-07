import Component from '@glimmer/component';
import Files, { ManagerFile } from 'ember-image-manager/services/files';
interface UiFileItemArgs {
    item: ManagerFile;
}
export default class UiFileItem extends Component<UiFileItemArgs> {
    files?: Files;
    selectFile(): void;
}
export {};
