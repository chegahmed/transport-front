import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { // Lazy loading Route
    path: '',
    loadChildren: () => import('./fo/fo.module').then(m => m.FoModule),

  },
  { // Lazy loading Route
    path: 'bo',
    loadChildren: () => import('./bo/bo.module').then(m => m.BoModule) ,
 //   canActivate: [AuthGuard],
   // data: { roles: [Role.ROLE_ADMIN, Role.ROLE_OPERATOR]}
  },
  { path: '**', redirectTo: '/' } // TODO NotFoundComponent
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
