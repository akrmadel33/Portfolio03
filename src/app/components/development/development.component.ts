import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WorkService } from '../../services/work.service';
import { CanvasService } from '../../services/canvas.service';

import { MainWork } from '../../classes/main-work';

import { TimelineMax, TweenMax } from 'gsap';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.css']
})
export class DevelopmentComponent implements AfterViewInit,OnInit {

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private workService:WorkService,
    private canvasService:CanvasService) { }

  workItems:MainWork[];

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
    let workList = document.getElementsByClassName('work-item');

    this.viewInitAnimation
    .staggerFrom([workList[0], workList[2], workList[4]], 3, {top:'-500%', left: '100%', ease: 'Power4.easeOut'}, 0.2)
    .staggerFrom([workList[1], workList[3], workList[5]], 3, {top: '500%', left:'-100%', ease: 'Power4.easeOut'}, 0.2, '-=3.5');
    // .staggerTo(workList, 3, {scale:'1.07', yoyo:true, repeat:-1, ease: 'Power2.easeInOut'}, 1, '-=0.5');
  }

  viewContentStyle() {
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    let elWidth = 116 + ( (winWidth-1350) * 0.1 );
    let distance:number = 176.4 + ( (winWidth-1000) * 0.1 );
    let yOffset:number = (335/500) * winHeight;
    let bgOffset:number = (335/500) * winHeight;
    let bgDistance:number = 0;
    let workList;

    for (let i=0; i<6; i++) {
      workList = document.getElementsByClassName('work-item')[i];
      workList.style.width = elWidth + 'px';
      workList.style.transform = "matrix(1, 0, -0.4, 1, "+distance+", "+yOffset+")";
      workList.children[2].style.backgroundPosition = +bgDistance+'px ' +bgOffset+'px';

      if (0<=i && i<=1 || i==4) {
        distance += 144.5 + ( (winWidth-1350) * 7/50 );
        yOffset += winHeight * 0.1;
        bgOffset -= winHeight * 0.1;
        bgDistance -= 144.5 + ( (winWidth-1350) * 7/50 );
      } else {
        distance += 193.8 + ( (winWidth-1350) * 7/50 );
        yOffset -= winHeight * 0.1;
        bgOffset += winHeight * 0.1;
        bgDistance -= 193.8 + ( (winWidth-1350) * 7/50 );
      }
    }
  }

  ngOnInit() {
    let type:string = this.activatedRoute.snapshot.paramMap.get('type');
    if (type == 'web') {
      this.workItems = this.workService.webWork;
    } else {
      this.workItems = this.workService.appWork;
    }
  }

  ngAfterViewInit() {
    this.didLoad(this);
  }

  didLoad(oldThis) {
    let imgs:HTMLElement[]= [
      document.getElementById('coverImg0'),
      document.getElementById('coverImg1'),
      document.getElementById('coverImg2'),
      document.getElementById('coverImg3'),
      document.getElementById('coverImg4'),
      document.getElementById('coverImg5')
    ];
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

    this.viewContentStyle();
    if(this.listItems.style.opacity == '' || this.listItems.style.opacity != 0) {
      this.navigationShrinkAnimation();
    }
    this.viewContentAnimation();
  }

  goDetails(item) {
    let workList = document.getElementsByClassName('work-item');

    let goDetails = new TimelineMax({});
    goDetails
    .staggerTo([workList[0], workList[2], workList[4]], 1.5, {top:'-500%', left: '100%', ease: 'Power4.easeIn'}, 0.2)
    .staggerTo([workList[1], workList[3], workList[5]], 1.5, {top: '500%', left:'-100%', ease: 'Power4.easeIn', onComplete:this.relocate, onCompleteParams:[this, item]}, 0.2, '-=2');
  }
  relocate(oldThis, item) {
    oldThis.canvasService.setLoading(true);
    let devType = oldThis.activatedRoute.snapshot.paramMap.get('type')
    // oldThis.router.navigateByUrl('/development/'+devType+'/details/'+item);
    oldThis.router.navigate(['development', devType, 'details', item]);
  }

}
