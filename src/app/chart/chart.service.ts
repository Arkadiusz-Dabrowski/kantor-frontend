import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(
    private http: HttpClient

  ) {
  }

  takeValues() {
    return this.http.get("http://localhost:8080/readValues").pipe(
      map(result => result));
  }
}
