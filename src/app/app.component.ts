import { VotingProcessGeeneralItemModel } from './core/models/votingProcessGeneralItem.model';
import { VotingService } from './core/services/voting.service';
import { CampaignModel } from './core/models/campaign.model';
import { CurrentCampaignService } from './shared/current-campaign.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SurgutViborNg';

  public currentCampaign: CampaignModel;

  constructor(
    private currentCampaignService: CurrentCampaignService,
    private votingService: VotingService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.currentCampaignService.watchCurrentCampaign().subscribe({
      next: (res) => {
        console.log(res)
        if (res) {
          this.currentCampaign = res;
        }
        
      }
    });
  }

  public navigateTo(url: string) {
    this.router.navigateByUrl(`${url}/${this.currentCampaign.Id}`)
  }
}
