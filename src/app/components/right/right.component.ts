import { Component, OnInit } from '@angular/core';
import {JsonService} from 'src/app/services/json.service'

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  titulo: string;
  listdate: any =[];
  estadoServices: boolean;

  constructor(public serv: JsonService) {
    this.titulo='Post Component';
    this.serv.getjson().subscribe(data => {
      this.listdate=data;
    });
    this.estadoServices=false;
   }

  ngOnInit(): void {
  }
  postServices(){
    return this.estadoServices=!this.estadoServices;
  }

}
