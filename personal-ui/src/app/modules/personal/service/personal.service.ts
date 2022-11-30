import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  private loading: boolean = false;
  get isLoading(){
    return this.loading;
  }
  set setIsLoading(loading: boolean){
    this.loading = loading;
  }
  constructor(private http: HttpClient) { }

  findAll() {
    this.loading = true;
    return this.http.get<Personal[]>(`${APP_URL}api/personal/`)
  }
  findAllPosition(){
    this.loading = true;
    return this.http.get<any>(`${APP_URL}api/position/`)
  }
  save(){
    this.loading = true;
    return this.http.post<any>(`${APP_URL}api/personal/`,person);
  }
  savePerson(){
   this.personalService.save(this.person)
     .subscribe
  }

}
