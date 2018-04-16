import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { DevelopmentComponent } from './components/development/development.component';
import { WorkDetailsComponent } from './components/work-details/work-details.component';

import { WorkService } from './services/work.service';
import { DetailsService } from './services/details.service';

import { NavItemsAnimationDirective } from './directives/nav-items-animation.directive';
import { WorkItemsDirective } from './directives/work-items.directive';

import { KeepHtmlPipe } from './pipes/keep-html.pipe';
import { CanvasService } from './services/canvas.service';
import { CanvasComponent } from './components/canvas/canvas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavItemsAnimationDirective,
    DevelopmentComponent,
    WorkItemsDirective,
    WorkDetailsComponent,
    KeepHtmlPipe,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WorkService, DetailsService, CanvasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
