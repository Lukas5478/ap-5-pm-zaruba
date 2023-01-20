import { Component } from '@angular/core';
import {ApiService} from "../services/api/api.service";
import {JokeParam} from "../models/joke.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  jokes$: Observable<JokeParam>[] = [];
  category: string = "";
  blacklistFlag: string[] = [];
  type: string = "";
  jokeSettings: boolean = true;

  constructor(
    private apiService: ApiService
  ) {}

  handleCategory(e: any){
    this.category = e.detail.value;
  }

  handleBlacklist(e: any){
    this.blacklistFlag = e.detail.value;
  }

  handleType(e: any){
    this.type = e.detail.value;
  }

  backToJokeSettings(){
    this.jokeSettings = true;
  }

  generateJoke(){
    this.jokeSettings = false;
    this.jokes$.push(this.apiService.getJoke(this.category,this.blacklistFlag,this.type));
  }

}
