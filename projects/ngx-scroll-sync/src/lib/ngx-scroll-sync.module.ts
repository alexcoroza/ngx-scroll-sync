import { NgModule } from '@angular/core';
import { NgxScrollSyncComponent } from './components/ngx-scroll-sync.component';
import { NgxScrollSyncDirective } from './directives/ngx-scroll-sync.directive';



@NgModule({
	declarations: [
		NgxScrollSyncComponent,
		NgxScrollSyncDirective
	],
	imports: [
	],
	exports: [
		NgxScrollSyncDirective
	]
})
export class NgxScrollSyncModule { }
