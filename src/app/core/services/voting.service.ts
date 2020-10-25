import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VotingService {

  private controller: string = 'api/Voting';

  constructor() { }
}
