import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) { }

  load() :Promise<any>  {
    let path = './appsettings.json'
    if (isDevMode()) {
      path = '/assets/appsettings.json';
    }

    const promise = this.httpClient.get(path)
      .toPromise()
      .then(data => {
        Object.assign(this, data);
        return data;
      });

    return promise;
}
}
