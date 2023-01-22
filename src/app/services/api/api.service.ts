import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {JokeParam} from "../../models/joke.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

getJoke(category: string, blacklistFlag: string[], type: string): Observable<JokeParam>{
    const baseUrl = "https://v2.jokeapi.dev";

    if(blacklistFlag.length == 0){
      const url =  `${baseUrl}/joke/${category}?type=${type}`;
      return this.http.get<JokeParam>(url);
    } else {
      const bFlag = blacklistFlag.join(",");
      const url = `${baseUrl}/joke/${category}?blacklistFlag=${bFlag}&type=${type}`;
      return this.http.get<JokeParam>(url);
    }

}


}

