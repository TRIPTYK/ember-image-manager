import Component from '@glimmer/component';
import Files from 'ember-image-manager/services/files';
interface UiFileDetailsArgs {
}
export default class UiFileDetails extends Component<UiFileDetailsArgs> {
    files?: Files;
}
export {};
