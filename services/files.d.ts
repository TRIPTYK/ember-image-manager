import Service from "@ember/service";
import Fetch from "ember-image-manager/services/fetch";
declare const Files_base: Readonly<typeof Service> & (new (properties?: object | undefined) => import("@ember/object/-private/types").EmberClassArguments & Service) & (new (...args: any[]) => import("@ember/object/-private/types").EmberClassArguments & Service);
export default class Files extends Files_base {
    fetch?: Fetch;
    selectedFile: ManagerFile;
    files: ManagerFile[];
    setFiles(files: ManagerFile[]): void;
}
export interface ManagerFile {
    absolutePath: string;
    modifiedAt: Date | null;
    name: string;
    size: number;
    url: string;
    type: string;
}
declare module "@ember/service" {
    interface Registry {
        "files": Files;
    }
}
export {};
