import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  
  private taskList: any[] = [
    {id:'12345',WidgetName:'widget 1',Description:'Packag 1',Parameter:'secondary_lang',Requrid:'True'},
    {id:'6789',WidgetName:'widget 2',Description:'Packag 2',Parameter:'secondary_lang',Requrid:'True'},
   {id:'1011',WidgetName:'widget 3',Description:'Packag 3',Parameter:'secondary_lang',Requrid:'True'},
   {id:'1213',WidgetName:'widget 4',Description:'Packag 4',Parameter:'secondary_lang',Requrid:'True'}
  ];

  constructor() {}

  getTaskList() {
    return this.taskList;
  }



}
