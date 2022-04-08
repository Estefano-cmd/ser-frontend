import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

//calendario
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
FullCalendarModule.registerPlugins([interactionPlugin, dayGridPlugin]);
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCat1Component } from './components/post-cat1/post-cat1.component';
import { ObjToArrayPipe } from './objToArray.pipe';
import { JovenezComponent } from './components/jovenez/jovenez.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { AllComponent } from './components/all/all.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCat1Component,
    ObjToArrayPipe,
    JovenezComponent,
    PublicacionComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FullCalendarModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
