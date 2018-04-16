import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DetailsService } from '../../services/details.service';
import { CanvasService } from '../../services/canvas.service';

import { MainDetails } from '../../classes/main-details';

import { TimelineMax } from 'gsap';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements AfterViewInit,OnInit {

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private detailsService:DetailsService,
    private canvasService:CanvasService) { }

    detailItems:MainDetails;

  //Existing DOM Elements
  private mainNav:HTMLElement = document.getElementById('menu');
  private rightNav:Element = document.getElementsByClassName('right')[0];
  private listItems:any = document.getElementsByClassName('items')[0];
  private logoElement:Element = document.getElementsByClassName('logo')[0];
  private overlay:HTMLElement = document.getElementById('main-overlay');

  //animations timeline
  private viewInitAnimation = new TimelineMax({});

  navigationShrinkAnimation() {
    this.viewInitAnimation
      .to(this.listItems, 1, {opacity:'0'})
      .to(this.mainNav, 0.8, {width:'8vw', ease: 'Power2.easeOut'})
      .to(this.rightNav, 0.8, {width:'3vw', right:'0.5vw'}, '-=0.8')
      .to(this.logoElement, 0.8, {fontSize:'2.5vw'}, '-=0.8')
      .to(this.overlay, 0.5, {opacity:'1'}, '-=0.4');
  }

  viewContentAnimation() {
    let detailsContainer = document.getElementsByClassName('details-container')[0];
    let back = document.getElementsByClassName('back')[0];

    this.viewInitAnimation
      .to(detailsContainer, 3, {right:'0', ease: 'Power4.easeOut'})
      .from(back, 2, {display:'none'}, '-=2');
  }

  ngOnInit() {
    let name = this.activatedRoute.snapshot.paramMap.get('item');

    this.detailItems = this.detailsService.mainDetails.filter(detail => detail.name == name)[0];
  }

  ngAfterViewInit() {
    this.didLoad(this);
  }

  didLoad(oldThis) {
    let imgs:HTMLElement[] = [
      document.getElementById('headerImg'),
      document.getElementById('sec1Img'),
      document.getElementById('sec2Img1'),
      document.getElementById('sec2Img2')
    ]
    let imgsCount:number = imgs.length;
    let loadedImgs:number = 0;

    for (let i=0; i<imgsCount; i++) {
      imgs[i].onload = () => {
        loadedImgs++;
        if (loadedImgs == imgsCount) {
          setTimeout(() => oldThis.allLoaded(), 500);
        }
      }
    }
  }
  allLoaded() {
    this.canvasService.setLoading(false);

    if(this.listItems.style.opacity == '' || this.listItems.style.opacity != 0) {
      this.navigationShrinkAnimation();
    }
    this.viewContentAnimation();
  }

  goBack() {
    let detailsContainer = document.getElementsByClassName('details-container')[0];
    let back = document.getElementsByClassName('back')[0];

    let backAnimation = new TimelineMax({});
    backAnimation
    .to(back, 1, {opacity:'0'})
    .to(detailsContainer, 1.5, {right:'-100%', ease: 'Power2.easeIn', onComplete:this.relocate, onCompleteParams:[this]}, '-=1');
  }
  relocate(oldThis) {
    oldThis.canvasService.setLoading(true);
    let devType = oldThis.activatedRoute.snapshot.paramMap.get('type');
    // oldThis.router.navigateByUrl('/development/'+devType);
    oldThis.router.navigate(['development', devType]);
  }

}
