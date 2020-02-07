import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ApiConstant } from "../constants/url-contants";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  constructor( private httpClient: HttpClient) { }

  getUsers():Observable<any> {
    return this.httpClient.get(ApiConstant.BASE_URL + ApiConstant.USER)
  }

  getUserPostById(i: number):Observable<any> {
    return this.httpClient.get(ApiConstant.BASE_URL + ApiConstant.POST + "?"+i)
  }
}
