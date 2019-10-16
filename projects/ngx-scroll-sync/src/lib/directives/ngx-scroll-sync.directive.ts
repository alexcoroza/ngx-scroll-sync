import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[ngxScrollSync]'
})



export class NgxScrollSyncDirective {

	@Input() ngxScrollSync: string;
	
	
	constructor(
		private elementRef: ElementRef
	) {}


	@HostListener('scroll') onscroll() {
		let matchedElements = document.querySelectorAll(`div[ngxScrollSync=${this.ngxScrollSync}]`);
		matchedElements.forEach((matched) => {
			matched.scrollTop = this.elementRef.nativeElement.scrollTop;
			matched.scrollLeft = this.elementRef.nativeElement.scrollLeft;
		});
	}

}
