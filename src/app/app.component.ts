import { Component } from '@angular/core';
import {PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor (router: Router, pathLocationStrategy: PathLocationStrategy) {
  //   const basePath: string = pathLocationStrategy.getBaseHref();
  //   const absolutePathWithParams: string = pathLocationStrategy.path();
  //   if (basePath !== absolutePathWithParams) {
  //     router.navigateByUrl(absolutePathWithParams);
  //   }}
  title = 'transport-front';
}
