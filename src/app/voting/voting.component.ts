import { CurrentCampaignService } from './../shared/current-campaign.service';
import { VotingProcessGeeneralItemModel } from './../core/models/votingProcessGeneralItem.model';
import { VotingUikItemModeel } from './../core/models/VotingUikItem.model';
import { VotingProcessUikItemModeel } from './../core/models/VotingProcessUikItem.model';
import { UikService } from './../core/services/uik.service';
import { CampaignModel } from './../core/models/campaign.model';
import { VotingService } from './../core/services/voting.service';
import { CampaignService } from './../core/services/campaign.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UikModel } from '../core/models/uik.model';
import { Chart } from 'chart.js';
import { debounceTime, filter, map, tap } from 'rxjs/operators';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {

  @ViewChild('chartCanvas', { static: false }) chartRef: ElementRef;
  @ViewChild('searchBar', { static: false }) searchBar: ElementRef;
  private chart: Chart;

  public campaign: CampaignModel;
  public general: VotingProcessGeeneralItemModel[];
  public uiksModels: VotingUikItemModeel[] = [];

  private uiksModelsHidden: VotingUikItemModeel[] = [];

  private search$: Subscription;


  constructor(
    private activatedRoute: ActivatedRoute,
    private campaignService: CampaignService,
    private votingService: VotingService,
    private uikService: UikService,
    private currentCampaignService: CurrentCampaignService
  ) { }

  ngOnInit(): void {
    let campaignId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    if (campaignId != NaN) {
      this.prepareComponent(campaignId);
    }
  }

  ngOnDestroy() {
    this.search$.unsubscribe();
  }

  private async prepareComponent(campaignId: number) {
    this.campaign = await this.campaignService.getById(campaignId).toPromise();
    this.currentCampaignService.setCurrentCampaign(this.campaign);
    this.general = await this.votingService.getGeneral(campaignId).toPromise();
    this.drawChart();
    let uiksList = await this.uikService.getList(campaignId).toPromise();

    let prs: Promise<VotingUikItemModeel>[] = [];
    uiksList.forEach(uik => {
      prs.push(
        this.votingService.getUik(uik.Id)
          .pipe(
            map(items => <VotingUikItemModeel>{
              UikId: uik.Id,
              UikOrd: uik.Ord,
              Items: items
            }))
          .toPromise()
      );
    });
    Promise.all(prs).then(res => {
      this.uiksModels = res.sort((a, b) => a.UikOrd - b.UikOrd);
      this.uiksModelsHidden = JSON.parse(JSON.stringify(this.uiksModels));
    });

    // uiksList.forEach(uik => {
    //   this.votingService.getUik(uik.Id).subscribe(res => {
    //     this.uiksModels.push({
    //       UikOrd: uik.Ord,
    //       UikId: uik.Id,
    //       Items: res
    //     });
    //   });
    // });

    // const uiks: VotingUikItemModeel[] = [];
    // for (let uik of uiksList) {
    //   let items = await this.votingService.getUik(uik.Id).toPromise();
    //   uiks.push({
    //     UikOrd: uik.Ord,
    //     UikId: uik.Id,
    //     Items: items
    //   });
    // }
    // this.uiksModels = uiks;

    this.search$ = fromEvent(this.searchBar.nativeElement, 'input').pipe(
      debounceTime(500),
      tap((event: any) => console.log(event.target.value)),
      map((event: any) => String(event.target.value)),
      filter(value => Number(value) != NaN)
    ).subscribe({
      next: (value: string) => {
        console.log(value)
        value != '' ?
          this.uiksModels = [...this.uiksModelsHidden].filter(x => x.UikOrd.toString().includes(value))
          : this.uiksModels = [...this.uiksModelsHidden]
      }
    })
  }

  private drawChart() {
    let labels = this.general.map(p => p.Name);
    let data = this.general.map(p => p.VotedPrcnt);
    let text = `Ход голосования. Проголосовало ${this.general[this.general.length - 1].VotedPrcnt}% (${this.general[this.general.length - 1].VotedAbs})`

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: {
        // label,
        labels,
        datasets: [
          {
            label: '',
            data,
            backgroundColor: '#6699ff'
          }
        ]
      },
      options: {
        representive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text,
          fontSize: 20
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }
}
