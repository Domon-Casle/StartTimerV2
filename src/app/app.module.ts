import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { ParentTimerComponent } from './parent-timer/parent-timer.component';
import { SubTimerComponent } from './sub-timer/sub-timer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout'
import { NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CurrentTimeComponent,
    ParentTimerComponent,
    SubTimerComponent,
    NavBarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    FlexLayoutModule,
    NgbModule,
    NgbTimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
