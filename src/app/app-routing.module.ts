import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgxScrollSyncSamplePageComponent } from 'src/app/pages/ngx-scroll-sync-sample-page/ngx-scroll-sync-sample-page.component';


const routes: Routes = [
	{ path: 'ngx-scroll-sync-sample', component: NgxScrollSyncSamplePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
