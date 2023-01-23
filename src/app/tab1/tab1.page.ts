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
  SelectCategory: any;
  SelectBFlag: any;
  SelectType: any;
  routeTo: boolean = false;

  constructor(
    private apiService: ApiService,
    private linkService: LinkService
  ) {}

  handleCategory(e: any){
    this.category = e.detail.value;
    this.isEmpty();
  }

  handleBlacklist(e: any){
    this.blacklistFlag = e.detail.value;
  }

  handleType(e: any){
    this.type = e.detail.value;
    this.isEmpty();
  }

  openJoke(link: Link){
    this.linkService.linkDetail = link;
  }

  isEmpty(){
    this.routeTo = !!(this.category && this.type);
  }

  generateLink(){
    if(!this.category && !this.type){
      alert("Please select type and category!");

      } else if(!this.category) {
        alert("Please select category!");

      } else if(!this.type) {
        alert("Please select type!");

    } else {
      this.linkService.saveLinks(this.category,this.blacklistFlag,this.type);
      this.SelectCategory = this.SelectBFlag = this.SelectType = null;

    }
  }
}
