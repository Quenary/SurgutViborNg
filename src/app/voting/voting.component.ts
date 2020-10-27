import { VotingUikItemModeel } from './../core/models/VotingUikItem.model';
import { VotingProcessUikItemModeel } from './../core/models/VotingProcessUikItem.model';
import { UikService } from './../core/services/uik.service';
import { CampaignModel } from './../core/models/campaign.model';
import { VotingService } from './../core/services/voting.service';
import { CampaignService } from './../core/services/campaign.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UikModel } from '../core/models/uik.model';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {

  public campaign: CampaignModel;
  public uiksModels: VotingUikItemModeel[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private campaignService: CampaignService,
    private votingService: VotingService,
    private uikService: UikService
  ) { }

  ngOnInit(): void {
    let campaignId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.prepareComponent(campaignId);
  }

  private async prepareComponent(campaignId: number): Promise<any> {
    this.campaign = await this.campaignService.getById(campaignId).toPromise();
    let uiksList = await this.uikService.getList(campaignId).toPromise();
    return new Promise(resolve, reject)
  }
}
