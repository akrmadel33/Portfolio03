import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { CanvasService } from './services/canvas.service';

import { TimelineMax, TweenMax } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(
    private router:Router,
    private canvasService:CanvasService) { }

  loading:boolean = true;

  navigationAnimation() {
    let navLeft:Element = document.getElementById('menu').getElementsByClassName('left')[0];
    let mainNav:HTMLElement = document.getElementById('menu');
    let navigationAnimation = new TimelineMax({});
    navigationAnimation
      .to(navLeft, 2, {top:'0', ease: 'Power2.easeOut'})
      .to(mainNav, 2, {top:'0', ease: 'Power2.easeOut'}, '-=1.5');
  }

  ngAfterViewInit() {
    this.canvasService.loading$.subscribe(loading => this.loading = loading);
    this.didLoad(this);
  }

  didLoad(oldThis) {
    window.onload = () => {
      let canvas = document.getElementById('canvas');
      TweenMax.to(canvas, 0.8, {opacity:0, onComplete:oldThis.fadeCanv, onCompleteParams:[oldThis]})
    }
  }
  fadeCanv(oldThis) {
    oldThis.canvasService.setLoading(false);
    oldThis.navigationAnimation();
  }

  navigate() {
    this.canvasService.setLoading(true);
  }

  goHome() {
    let overlay:HTMLElement = document.getElementById('main-overlay');
    let workList = document.getElementsByClassName('work-item');
    let detailsContainer = document.getElementsByClassName('details-container')[0];
    let back = document.getElementsByClassName('back')[0];

    if (document.getElementById('development-container')) {
      let fromDevelopment = new TimelineMax({});
      fromDevelopment
        .staggerTo([workList[0], workList[2], workList[4]], 1.5, {top:'-500%', left: '100%', ease: 'Power4.easeIn'}, 0.2)
        .staggerTo([workList[1], workList[3], workList[5]], 1.5, {top: '500%', left:'-100%', ease: 'Power4.easeIn'}, 0.2, '-=2')
        .to(overlay, 0.8, {opacity:'0', onComplete:this.relocate, onCompleteParams:[this]}, '-=1');
    } else if (document.getElementById('details-container')) {
      let backAnimation = new TimelineMax({});
      backAnimation
      .to(back, 1, {opacity:'0'})
      .to(detailsContainer, 1.5, {right:'-100%', ease: 'Power2.easeIn'}, '-=1')
      .to(overlay, 0.8, {opacity:'0', onComplete:this.relocate, onCompleteParams:[this]}, '-=1');
    } else {
      let fromNone = new TimelineMax({});
      fromNone.to(overlay, 0.8, {opacity:'0', onComplete:this.relocate, onCompleteParams:[this]});
    }
  }
  relocate(oldThis) {
    oldThis.router.navigateByUrl('/');

    let mainNav:HTMLElement = document.getElementById('menu');
    let rightNav:Element = document.getElementsByClassName('right')[0];
    let listItems:Element = document.getElementsByClassName('items')[0];
    let logoElement:Element = document.getElementsByClassName('logo')[0];

    let toHome = new TimelineMax({});
    toHome
      .to(mainNav, 0.8, {width:'14vw', ease: 'Power2.easeOut'})
      .to(rightNav, 0.8, {width:'8vw', right:'1vw', ease: 'Power2.easeOut'}, '-=0.8')
      .to(logoElement, 0.8, {fontSize:'7.5vw'}, '-=0.8')
      .to(listItems, 1, {opacity:'1'});
  }
}
