import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxScrollSyncModule } from 'projects/ngx-scroll-sync/src/lib/ngx-scroll-sync.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxScrollSyncSamplePageComponent } from './pages/ngx-scroll-sync-sample-page/ngx-scroll-sync-sample-page.component';

@NgModule({
	declarations: [
		AppComponent,
		NgxScrollSyncSamplePageComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgxScrollSyncModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
