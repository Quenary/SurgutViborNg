import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UikService {

  private controller: string = 'api/Uik';

  constructor() { }
}
