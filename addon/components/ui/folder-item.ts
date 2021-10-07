import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface UiFolderItemArgs {
    item:unknown
}

export default class UiFolderItem extends Component<UiFolderItemArgs> {

    @tracked open:boolean = false;
    @action
    toggle(){
        this.open = !this.open;
    }
}
