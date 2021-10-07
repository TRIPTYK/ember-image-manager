import { action } from '@ember/object';
import Component from '@glimmer/component';

interface BaseAppArgs {}

export default class BaseApp extends Component<BaseAppArgs> {

    @action
    upload(){
        console.log("uploading Files")
    }
}
