import { Component } from '@angular/core';
import {ApiService} from "../services/api/api.service";
import {Link, LinkService} from "../services/link/link.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  category: string = "";
  blacklistFlag: string[] = [];
  type: string = "";



  constructor(
    private apiService: ApiService,
    private linkService: LinkService
  ) {


  }

  handleCategory(e: any){
    this.category = e.detail.value;
  }

  handleBlacklist(e: any){
    this.blacklistFlag = e.detail.value;
  }

  handleType(e: any){
    this.type = e.detail.value;
  }

  openJoke(link: Link){
    this.linkService.linkDetail = link;
  }


  generateLink(){

    this.linkService.saveLinks(this.category,this.blacklistFlag,this.type);

  }
}
