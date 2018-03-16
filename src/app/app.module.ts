import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ResourcelistComponent } from './resourcelist/resourcelist.component';
import { ResourceaddComponent } from './resourceadd/resourceadd.component';
import { CommonService } from './app/services/common.service';
import { ResourceFilterPipe } from './filter/resource-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ResourcelistComponent,
    ResourceaddComponent,
    ResourceFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
