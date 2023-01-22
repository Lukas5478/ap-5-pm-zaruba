import { Component } from '@angular/core';
import {Link, LinkService} from "../services/link/link.service";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  links: Link[] = [];

  constructor(
    private linkService: LinkService
  ) {
    this.linkService.links$.subscribe(links => {
      this.links = links;
    })
  }

  openJoke(link: Link){
    this.linkService.linkDetail = link;
  }

  async removeLink(index:any){
   await this.linkService.removeLink(index);
   this.links.splice(index,1);
  }

}
