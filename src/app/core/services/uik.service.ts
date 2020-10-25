import { UikModel } from './../models/uik.model';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UikService {

  private controller: string = 'api/Uik';

  constructor(
    private apiService: ApiService
  ) { }

  public get(id: number): Observable<UikModel> {
    return this.apiService.get(`${this.controller}/${id}`);
  }

  public getList(campaignId: number): Observable<UikModel[]> {
    return this.apiService.get(`${this.controller}/List/${campaignId}`);
  }
}
