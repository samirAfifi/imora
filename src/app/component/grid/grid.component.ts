import { DataService } from './../../data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import{ jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable'; 
import { Router,ActivatedRoute } from '@angular/router';


 


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  allData: any= []
  tasklist:any = [];  data:any
  constructor(private _DataService:DataService,
    private _ActivatedRoute:ActivatedRoute,
     private _Router:Router){}
  
  columns: any[] =
  [
      { text: 'ID', dataField: 'ID', width:200 },
      { text: 'Name', dataField: 'Name', width: 100 },
      { text: 'Description', dataField: 'Description', width: 450 },
      { text: 'Parameter Name', dataField: 'Parameter Name', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
      { text: 'Requrid', dataField: 'Requrid', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'n' },
      { text: 'Action', dataField: 'Action', width: 800 },
  ];

  ngOnInit(): void {
    this._ActivatedRoute.queryParams.subscribe(params => {
      if (params['data']) {
        const receivedData = JSON.parse(params['data']);
        console.log(receivedData);
        
        this.updateDataTable(receivedData, receivedData.length);
      }
    });

    this.tasklist = this._DataService.getTaskList(); 
    this.allData = this.tasklist;
  }

  updateDataTable(updatedData: any , i:any) {
    const id = updatedData.id; 
    const WidgetName=updatedData.WidgeName;
    const PackagName=updatedData.PackagName;
    this.tasklist = this._DataService.getTaskList(); 
        this.tasklist[1].id = id
        this.tasklist[1].WidgetName = WidgetName;
        this.tasklist[1].Description = PackagName;
  }



 
   delRow(){    
    this.allData.splice(0,1);
   }
   EditRow(i: number){
    const sandData = {
      id: this.allData[i].id,
      WidgeName: this.allData[i].WidgetName,
      PackagName: this.allData[i].Description,
      DirectiveName: this.allData[i].Parameter,
    };
    this._Router.navigate(['/form'], { queryParams: { data: JSON.stringify(sandData) } });
   }
}
