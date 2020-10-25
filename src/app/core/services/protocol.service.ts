import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProtocolService {

  private controller: string = 'api/Protocol';

  constructor() { }
}
