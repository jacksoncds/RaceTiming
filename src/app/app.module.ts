import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimingTableComponent } from './timing-table/timing-table.component';
import { DriverPositionComponent } from './driver-position/driver-position.component';
import { TireChangeProgressComponent } from './tire-change-progress/tire-change-progress.component';
import { TimeFormatPipe } from './time-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimingTableComponent,
    DriverPositionComponent,
    TireChangeProgressComponent,
    TimeFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
