import { ActivatedRoute } from '@angular/router';
import { CampaignService } from './../core/services/campaign.service';
import { ProtocolDistrictItemModeel } from './../core/models/protocolDistrictItem.model';
import { ProtocolItemType } from './../core/models/protocolItemType.enum';
import { ProtocolService } from './../core/services/protocol.service';
import { ProtocolDistrictModel } from './../core/models/protocolDistrict.model';
import { CampaignModel } from './../core/models/campaign.model';
import { CurrentCampaignService } from './../shared/current-campaign.service';
import { VoteModel } from './../core/models/vote.model';
import { VoteService } from './../core/services/vote.service';
import { Component, OnInit } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.component.html',
  styleUrls: ['./protocol.component.scss']
})
export class ProtocolComponent implements OnInit {

  public campaign: CampaignModel;
  public votes: VoteModel[];
  public protocolDisctrict: ProtocolDistrictModel;
  public protocolDistrictItem: ProtocolDistrictItemModeel[];

  constructor(
    private voteService: VoteService,
    private currentCampaignService: CurrentCampaignService,
    private protocolService: ProtocolService,
    private campaignService: CampaignService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let campaignId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    if (campaignId != NaN) {
      this.prepareComponent(campaignId);
    }
  }

  private async prepareComponent(campaignId) {
    this.campaign = await this.campaignService.getById(campaignId).toPromise();
    this.currentCampaignService.setCurrentCampaign(this.campaign);
    this.votes = await this.voteService.get(this.campaign.Id).toPromise();
    let districtId = this.votes[0].Districts[0].Id;
    this.protocolDisctrict = await this.protocolService.getDistrict(districtId).toPromise();
    this.protocolService.getDistrict(districtId)
      .pipe(
        map(d => d.Items.filter(item => item.Type === ProtocolItemType.Candidate)),
        tap(res => console.log(res))
      )
      .subscribe(res => {
        this.protocolDistrictItem = res;
      });
  }

}
