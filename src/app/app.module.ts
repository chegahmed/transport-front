import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DeviceDetectorModule} from 'ngx-device-detector';
import {LoadingScreenComponent} from './core/loading-screen/components/loading-screen.component';
import {LoadingScreenInterceptorService} from './core/interceptor/loading-screen-interceptor.service';
import {AppConfiguration} from './app-configuration';



@NgModule({
  declarations: [
    AppComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingScreenInterceptorService,
      multi: true
    },
    AppConfiguration,
    {
      provide: APP_INITIALIZER,
      useFactory: AppConfigurationFactory,
      deps: [AppConfiguration, HttpClient], multi: true
    }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function AppConfigurationFactory (
  appConfig: AppConfiguration) {
  return () => appConfig.loadAppConfig();
}
