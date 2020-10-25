import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private controller: string = 'api/Vote';

  constructor() { }
}
