import { action } from "@ember/object";
import Service, { inject } from "@ember/service";
import { tracked } from "@glimmer/tracking";
import Fetch from "ember-image-manager/services/fetch";
export default class Files extends Service.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  @inject
  fetch?: Fetch;
  
  @tracked
  selectedFile: ManagerFile = {
    absolutePath: "",
    modifiedAt:null,
    name:"",
    size:0,
    url:"",
    type:"",
};
  
  @tracked
  files: ManagerFile[] = [];
  

  @action
  setFiles(files: ManagerFile[]) {
    this.files = files;
  }
}

export interface ManagerFile {
  absolutePath: string;
  modifiedAt:Date | null;
  name:string;
  size:number;
  url:string;
  type:string;
}
// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module "@ember/service" {
  interface Registry {
    "files": Files;
  }
}
