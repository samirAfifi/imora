import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';






@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  Form!:FormGroup;
  data:any;
  allData: any[] = []; 
  updataIndex:any;
  tasklist:any

  constructor(private fb:FormBuilder,
    private _ActivatedRoute:ActivatedRoute,
    private _Router:Router,
    private _DataService:DataService

  )  {  }

  
  ngOnInit(): void {
    this._ActivatedRoute.queryParams.subscribe(params => {
      if (params['data']) {
        this.data = JSON.parse(params['data']); 
      }
      this.dataForm();
    });
  }

  dataForm(){
    this.Form = this.fb.group({
      server1:[''],
      server2:[''],
      server3:[''],
      id:[this.data.id ],
      WidgeName:[this.data.WidgeName ],
      PackagName:[this.data.PackagName ],
      DirectiveName:[''],
      Description:[''],
      MaxSizeX:[''],
      MaxSizeY:[''],
      MinSizeX:[''],
      MinSizeY:[''], 
      SizeX:[''],
      SizeY:[''],
      email:[''],
      icon:[''],
      Virtual:[''],
      Anonymous:[''],
      WidgetTitle:[''],
      Defintion:[''],
      Rendering:[''],
      Permission:['']
    })
  }


  onsubmit(){
    console.log(this.Form.value)
  }
  reset(){
    this.Form.reset();
  }
  saveChange() {
    const sandData = {
      id: this.Form.value.id,
      WidgeName: this.Form.value.WidgeName,
      PackagName: this.Form.value.PackagName,
    };

    this._Router.navigate(['/main/grid'], { queryParams: { data: JSON.stringify(sandData) } });
    
  }


}
