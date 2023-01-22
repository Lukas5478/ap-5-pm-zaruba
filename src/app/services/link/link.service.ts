import { Injectable } from '@angular/core';
import {ReplaySubject} from "rxjs";
import {StorageService} from "../storage/storage.service";

export interface Link {
  category: string;
  blacklistFlag: string[];
  type: string;

}

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  linkDetail: Link = {
    category: 'programming',
    blacklistFlag: ['nsfw'],
    type: 'single'
  }

  private privateLinks: Link[] = [];

  private privateLinksSubject = new ReplaySubject<Link[]>(1);

  link1: Link={category: "", blacklistFlag: [],type: ""}
  _links$: Link[] = [];
  constructor(
    private storageService: StorageService
  ) {

    this.storageService.getData('links').then(links => {
      if (!links) {
        links = this.privateLinks;
      }
      this.privateLinksSubject.next(links);
    })
    this.links$.subscribe(links => {
      this._links$ = links;
    })
  }

  get links$() {
    return this.privateLinksSubject.asObservable();
  }

  async saveLinks(category: string, blacklistFlag: string[], type:string){
    this.link1 = {category: category, blacklistFlag:blacklistFlag,type: type}
    this._links$.push(this.link1);
    await this.storageService.saveData('links', this._links$);
    this.privateLinksSubject.next(this._links$);
  }

  async removeLink(index:any){
    this._links$.splice(index,1);
    await this.storageService.saveData('links', this._links$);
    this.privateLinksSubject.next(this._links$);
  }

}
