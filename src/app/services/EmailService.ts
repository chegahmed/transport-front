import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AppConfiguration} from '../app-configuration';
import {ContactForm} from '../fo/pages/dto/ContactForm';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient,
              private configuration: AppConfiguration) { }

  sendMail(contactForm: ContactForm): Observable<boolean> {
    console.log('contactForm : ', contactForm);

  //  let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // headers.append('access-control-allow-origin', '*');
    return this.http.post<boolean>(this.configuration.APIEndpoint + 'public/mail/sendemail', contactForm);
  }
}
