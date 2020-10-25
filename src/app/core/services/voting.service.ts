import { VotingProcessGeeneralItemModel } from './../models/votingProcessGeneralItem.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { VotingProcessUikItemModeel } from '../models/VotingProcessUikItem.model';

@Injectable({
  providedIn: 'root'
})
export class VotingService {

  private controller: string = 'api/Voting';

  constructor(
    private apiService: ApiService
  ) { }

  public getGeneral(campaignId: number): Observable<VotingProcessGeeneralItemModel[]> {
    return this.apiService.get(`${this.controller}/General/${campaignId}`);
  }

  public getUik(uikId: number): Observable<VotingProcessUikItemModeel[]> {
    return this.apiService.get(`${this.controller}/Uik/${uikId}`);
  }
}
