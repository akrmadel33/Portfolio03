import { Directive, ElementRef, HostListener } from '@angular/core';

import { TweenMax } from 'gsap';

@Directive({
  selector: '[appNavItemsAnimation]'
})
export class NavItemsAnimationDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    let topSpans:HTMLElement[] = [this.el.nativeElement.children[0], this.el.nativeElement.children[3]];
    TweenMax.to(topSpans, 0.8, {width:'100%', ease: 'Power2.easeOut'});

    let cornerSpans:HTMLElement[] = [this.el.nativeElement.children[1], this.el.nativeElement.children[2]];
    TweenMax.to(cornerSpans, 0.8, {height:'100%', ease: 'Power2.easeOut'});
  }

  @HostListener('mouseleave') onMouseLeave() {
    let topSpans:HTMLElement[] = [this.el.nativeElement.children[0], this.el.nativeElement.children[3]];
    TweenMax.to(topSpans, 0.8, {width:'0', ease: 'Power2.easeOut'});

    let cornerSpans:HTMLElement[] = [this.el.nativeElement.children[1], this.el.nativeElement.children[2]];
    TweenMax.to(cornerSpans, 0.8, {height:'0', ease: 'Power2.easeOut'});
  }

}
