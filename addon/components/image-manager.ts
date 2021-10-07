import { inject } from '@ember/service';
import Component from '@glimmer/component';
import Files from 'ember-image-manager/services/files';


interface ImageManagerArgs {}

export default class ImageManager extends Component<ImageManagerArgs> {
    
   @inject files?:Files;
   
}
