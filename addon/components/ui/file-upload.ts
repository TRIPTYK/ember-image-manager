import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface UiFileUploadArgs {}

export default class UiFileUpload extends Component<UiFileUploadArgs> {
    @tracked
    isOpen = false;
    @tracked 
    fileList:any[] = [];
    @action
    toggle(){
        this.isOpen = !this.isOpen;
    }
    @action
    addFiles(e:any){
        console.log('upload file');
      
        // this.fileList = ;
        console.log(e.target.files)
        this.fileList = [...e.target.files].map(item => (item));
       console.log(this.fileList[0].name)
    }
}
