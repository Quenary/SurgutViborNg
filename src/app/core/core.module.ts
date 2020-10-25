import { VotingService } from './services/voting.service';
import { VoteService } from './services/vote.service';
import { UikService } from './services/uik.service';
import { ProtocolService } from './services/protocol.service';
import { CampaignService } from './services/campaign.service';
import { ApiService } from './services/api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    CampaignService,
    ProtocolService,
    UikService,
    VoteService,
    VotingService
  ]
})
export class CoreModule { }
