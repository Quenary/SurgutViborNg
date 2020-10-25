import { CurrentCampaignModel } from './../models/currentCampaign.model';
import { CampaignModel } from './../models/campaign.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private controller: string = 'api/Campaign';

  constructor(
    private apiService: ApiService
  ) { }

  public get(): Observable<CampaignModel[]> {
    return this.apiService.get(this.controller);
  }

  public getById(id: number): Observable<CurrentCampaignModel> {
    return this.apiService.get(`${this.controller}/${id}`);
  }

  public getByDistrict(districtId: number): Observable<CurrentCampaignModel> {
    return this.apiService.get(`${this.controller}/GetByDistrict/${districtId}`);
  }

  public getByUik(uikId: number): Observable<CurrentCampaignModel> {
    return this.apiService.get(`${this.controller}/GetByUik/${uikId}`);
  }
}
