import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { PackageRead } from '../../dto/package';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private httpClient:HttpClient) { }


  getList(): Observable<PackageRead[]> {
    return this.httpClient.get<PackageRead[]>(environment.apiBaseUrl + "/packages");
  }
}
