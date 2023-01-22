import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api/api.service";

import {Link, LinkService} from "../../services/link/link.service";
import {Observable} from "rxjs";
import {JokeParam} from "../../models/joke.model";

@Component({
  selector: 'app-joke-print',
  templateUrl: './joke-print.page.html',
  styleUrls: ['./joke-print.page.scss'],
})
export class JokePrintPage implements OnInit {

  link: Link = {category: "", blacklistFlag: [], type: ""};
  jokes$: Observable<JokeParam>[] = [];

  constructor(
    private apiService: ApiService,
    private linkService: LinkService
  ) { }

  ngOnInit() {
    this.link = this.linkService.linkDetail;
  }

  generateJoke(){
    this.jokes$.unshift(this.apiService.getJoke(this.link.category,this.link.blacklistFlag,this.link.type))
  }

}
