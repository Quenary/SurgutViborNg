import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/campaign', pathMatch: 'full'},
  { path: 'campaign', loadChildren: () => import('./campaign/campaign.module').then(m => m.CampaignModule) },
  { path: 'voting/:id', loadChildren: () => import('./voting/voting.module').then(m => m.VotingModule) },
  { path: 'protocol/:id', loadChildren: () => import('./protocol/protocol.module').then(m => m.ProtocolModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
