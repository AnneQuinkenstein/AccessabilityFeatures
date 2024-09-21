import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Publication} from "./publication";

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) { }

  url: string = "/assets/SampleData.json";

  getPublicationData(): Observable<Publication[]> {
   return this.http.get <Publication[]>(this.url);
    }
}
