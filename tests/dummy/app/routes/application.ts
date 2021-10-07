import { action } from '@ember/object';
import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import Fetch from 'ember-image-manager/services/fetch';
import Files from 'ember-image-manager/services/files';
export default class Application extends Route.extend({
  // anything which *must* be merged to prototype here
 
}) {
  @inject fetch?:Fetch;
  @inject files?:Files

  @action
  async model(){
    console.log('start application route model called');
    this.files?.setFiles((await this.fetch?.request("http://localhost:3000/api/v1/files","GET","JSON")).files) ;
    console.log('end application route model called');

  }
}
