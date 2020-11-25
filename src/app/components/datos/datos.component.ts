import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  nombre='Montenegro Posito Leyser Nilton'
  email='lmontenegrop14@unc.edu.pe'
  direccion='Jr. San Luis S/N C6'
  telefono='076-361634'

  constructor() { }

  ngOnInit(): void {
  }

}
