import { CampaignService } from './../core/services/campaign.service';
import { CampaignModel } from './../core/models/campaign.model';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrentCampaignService {

  private currentCampaign$: BehaviorSubject<CampaignModel> = new BehaviorSubject(null);

  constructor(
    private campaignService: CampaignService
  ) {
    this.campaignService.get().subscribe(res => {
      this.currentCampaign$.next(res[0]);
    });
  }

  public watchCurrentCampaign(): Observable<CampaignModel> {
    return this.currentCampaign$.asObservable().pipe(
      filter(item => item != null)
    );
  }

  public setCurrentCampaign(campaign: CampaignModel) {
    if (this.currentCampaign$.value == null || this.currentCampaign$.value.Id != campaign.Id) {
      let cObj: CampaignModel = { ...campaign }
      this.currentCampaign$.next(cObj);
    }
  }

  public getCurrentCampaign(): CampaignModel {
    return <CampaignModel>{ ...this.currentCampaign$.value };
  }
}
