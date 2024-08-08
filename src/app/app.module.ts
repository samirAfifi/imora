import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { SelectComponent } from './component/select/select.component';
import { GridsterModule } from 'angular-gridster2';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './component/form/form.component';
import { CompresdComponent } from './component/compresd/compresd.component';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { GridComponent } from './component/grid/grid.component';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import{ jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';  
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SelectComponent,
    FormComponent,
    CompresdComponent,
    GridComponent,
    
  ],
  imports: [
    AppRoutingModule,
    GridsterModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    jqxGridModule,
    jqxButtonModule,
    jqxGridModule,
    CommonModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
