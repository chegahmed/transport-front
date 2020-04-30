import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FoRoutingModule} from './fo-routing.module';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { MainComponent } from './main/main.component';
import {HomeComponent} from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    ContactComponent],
  imports: [
    CommonModule,
    FoRoutingModule,
    ScrollToModule.forRoot(),
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule
  ],
  entryComponents: [
  ],
  exports: [

  ]
})
export class FoModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faInfoCircle);

  }
}
