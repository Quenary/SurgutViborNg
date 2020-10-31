import { CurrentCampaignService } from './shared/current-campaign.service';
import { VotingComponent } from './voting/voting.component';
import { CoreModule } from './core/core.module';
import { ConfigurationService } from './shared/configuration.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ProtocolComponent } from './protocol/protocol.component';

export function appInit(config: ConfigurationService) {
  return () => config.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInit,
      multi: true,
      deps: [ConfigurationService]
    },
    CurrentCampaignService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
