import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
export interface type{
  id: number;
  name: string;
  type: string;
  date: any;
}

@Component({
  selector: 'app-list-of-instruments',
  templateUrl: './list-of-instruments.component.html',
  styleUrls: ['./list-of-instruments.component.css']
})



export class ListOfInstrumentsComponent implements OnInit {

  public list:type[]=[
    {id: 1, name:'David', type: 'market warrant', date:'12/5/2022' },
    {id: 2, name:'Ruemu', type: 'market warrant General', date:'12/5/2022' },
    {id: 3, name:'Taiwo', type: 'Housing warrant Specific', date:'12/5/2022' },
    {id: 4, name:'Rachael', type: 'Share holding warrant', date:'12/5/2022' },
    {id: 5, name:'Awaji', type: 'Reflation Right', date:'12/5/2022' },
    {id: 6, name:'Okotie', type: 'Monetisation right', date:'12/5/2022' },
    {id: 7, name:'Hanson', type: 'per capita right', date:'12/5/2022' },
    {id: 8, name:'Julius', type: 'Capital in kind', date:'12/5/2022' },
    {id: 9, name:'David', type: 'market warrant', date:'12/5/2022' },
    {id: 10, name:'Ruemu', type: 'market warrant General', date:'12/5/2022' },
    {id: 11, name:'Taiwo', type: 'Housing warrant Specific', date:'12/5/2022' },
    {id: 12, name:'Rachael', type: 'Share holding warrant', date:'12/5/2022' },
    {id: 13, name:'Awaji', type: 'Reflation Right', date:'12/5/2022' },
    {id: 14, name:'Okotie', type: 'Monetisation right', date:'12/5/2022' },
    {id: 15, name:'Hanson', type: 'per capita right', date:'12/5/2022' },
    {id: 16, name:'Julius', type: 'Capital in kind', date:'12/5/2022' },
  ]

  constructor(private dat:ServiceService) { }
  dav:any;

  ngOnInit(): void {
   this.getData()

  }
  getData(){
    this.dat.getData().subscribe(
     (data)=>{console.log (this.dav=(data.data))} 
    )
  }
}
