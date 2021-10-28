import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private statusURL = "/api/status"

  constructor(private http: HttpClient) { }
    /*********** */
  
}
