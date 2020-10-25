import { VoteModel } from './../models/vote.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private controller: string = 'api/Vote';

  constructor(
    private apiService: ApiService
  ) { }

  public get(campaignId: number): Observable<VoteModel[]> {
    return this.apiService.get(`${this.controller}/List/${campaignId}`);
  }
}
