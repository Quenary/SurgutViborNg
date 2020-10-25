import { CampaignService } from './../core/services/campaign.service';
import { Component, OnInit } from '@angular/core';
import { CampaignModel } from '../core/models/campaign.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  constructor(
    private campaignService: CampaignService,
    private router: Router
  ) { }

  public campaigns: CampaignModel[];

  ngOnInit(): void {
    this.campaignService.get().subscribe({
      next: (res: CampaignModel[]) => {
        console.log(res)
        this.campaigns = res;
      },
      error: (error) => {
        console.log('error')
      },
      complete: () => {
        console.log('completed')
      }
    })
  }

  public openVoting(id: string) {
    this.router.navigateByUrl(`/voting/${id}`)
  }
}
