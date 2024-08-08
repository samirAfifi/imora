import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  myForm!:FormGroup;
  data:any = [
    {  name: 'Template' },
    {  name: 'Widget' },
    {  name: 'Schedular Class' },
    
]


  constructor(private fb:FormBuilder, private _DataService:DataService,private _Router:Router ) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      server1:['',[Validators.required]],

      server2:['',[Validators.required]],

      server3:[{ value: '', disabled: true }],
      
    })
  
      
  
    

   
    this.HandelDisable();

  }
  HandelDisable() {
    const server1Control = this.myForm.get('server1')!;
    const server2Control = this.myForm.get('server2')!;
    const server3Control = this.myForm.get('server3')!;
  
    this.myForm.valueChanges.subscribe(() => {
      if (server1Control.valid && server2Control.valid) {
        if (server3Control.disabled) {
          server3Control.enable({ emitEvent: false });
        }
      } else {
        if (server3Control.enabled) {
          server3Control.disable({ emitEvent: false });
        }
      }
    });
  }
 

  onServerChange(){
    if( this.data[2]=== this.myForm.get('server3')?.value){
      this._Router.navigate(['/main/compresd'])
    }

    else if( this.data[1]=== this.myForm.get('server3')?.value){

      this._Router.navigate(['/main/grid'])
    }

    else{
      this._Router.navigate(['/main/compresd'])
    }
    
  }
  


  onSubmit(){
    console.log(this.myForm.value);
  }
  get server1() {
    return this.myForm.get('server1');
  }

  get server2() {
    return this.myForm.get('server2');
  }

  get server3() {
    return this.myForm.get('server3');
  }

  
}
