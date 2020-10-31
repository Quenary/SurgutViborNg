import { CampaignModel } from './../core/models/campaign.model';
import { CurrentCampaignService } from './../shared/current-campaign.service';
import { CampaignService } from './../core/services/campaign.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  constructor(
    private campaignService: CampaignService,
    private router: Router,
    private currentCampaignService: CurrentCampaignService
  ) { }

  public campaigns: CampaignModel[];

  ngOnInit(): void {
    this.campaignService.get().subscribe({
      next: (res: CampaignModel[]) => {
        this.campaigns = res;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  public openVoting(campaign: CampaignModel) {
    this.currentCampaignService.setCurrentCampaign(campaign);
    this.router.navigateByUrl(`/voting/${campaign.Id}`)
  }
}
