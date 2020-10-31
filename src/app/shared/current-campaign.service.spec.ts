import { TestBed } from '@angular/core/testing';

import { CurrentCampaignService } from './current-campaign.service';

describe('CurrentCampaignService', () => {
  let service: CurrentCampaignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentCampaignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
