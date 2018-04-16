import { Directive, ElementRef, HostListener, Input, AfterViewInit } from '@angular/core';

import { TweenMax } from 'gsap';

@Directive({
  selector: '[appWorkItems]'
})
export class WorkItemsDirective implements AfterViewInit {

  @Input() bgColor:string;
  @Input() cover:string;

  constructor(
    private el:ElementRef) { }

  ngAfterViewInit() {
    this.el.nativeElement.style.backgroundColor = this.bgColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    let featuredCover:any = document.getElementsByClassName('featured-cover');
    for (let i=0; i<featuredCover.length; i++) {
      featuredCover[i].style.backgroundImage = "url('/assets/imgs/" +this.cover+ "')";
    }
    TweenMax.to(featuredCover, 1.5, {opacity:'1'});
  }

  @HostListener('mouseleave') onMouseLeave() {
    let featuredCover:any = document.getElementsByClassName('featured-cover');
    TweenMax.to(featuredCover, 0.5, {opacity:'0'});
  }

}
