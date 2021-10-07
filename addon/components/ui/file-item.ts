import { action } from '@ember/object';
import { inject } from '@ember/service';
import Component from '@glimmer/component';
import Files, { ManagerFile } from 'ember-image-manager/services/files';

interface UiFileItemArgs {
    item:ManagerFile
}

export default class UiFileItem extends Component<UiFileItemArgs> {
    @inject
    files?:Files
    @action
    selectFile(){
        this.files!.selectedFile=this.args.item;
    }
}
