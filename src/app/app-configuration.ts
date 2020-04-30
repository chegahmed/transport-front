import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppConfiguration {
  APIEndpoint: string;

  constructor(private httpClient: HttpClient) {
  }

  loadAppConfig(): Promise<any> {
    return new Promise((r: any, e: any) => {

      this.httpClient.get('./assets/configuration/config.json')
        .subscribe(
          (content: AppConfiguration) => {
            Object.assign(this, content);
            r(this);
          }); // , error: any => e(error))
      // ,
      // reason: any => e(reason));
    });
  }
}


