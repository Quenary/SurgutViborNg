import { ProtocolDistrictModel } from './../models/protocolDistrict.model';
import { ProtocolModel } from './../models/protocol.model';
import { ApiService } from './api.service';
import { ProtocolGeneralModel } from './../models/protocolGeneral.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProtocolService {

  private controller: string = 'api/Protocol';

  constructor(
    private apiService: ApiService
  ) { }

  public getGeneral(campaignId: number): Observable<ProtocolGeneralModel> {
    return this.apiService.get(`${this.controller}/General/${campaignId}`);
  }

  public getUik(protocolId: number): Observable<ProtocolModel> {
    return this.apiService.get(`${this.controller}/${protocolId}`);
  }

  public getDistrict(districtId: number): Observable<ProtocolDistrictModel> {
    return this.apiService.get(`${this.controller}/District/${districtId}`);
  }
}
