import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  initVals() : Observable<JSON> {
    return this.http.get<JSON>("https://cs251-outlab-6.herokuapp.com/initial_values/");
  }

  postVals(data:JSON) : Observable<JSON> {
    return this.http.post<JSON>("https://cs251-outlab-6.herokuapp.com/add_new_feedback/", data);
  }
}
