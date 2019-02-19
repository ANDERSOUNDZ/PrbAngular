import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-hijo',
  templateUrl: './item-hijo.component.html',
  styleUrls: ['./item-hijo.component.scss']
})
export class ItemHijoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  //Variable Comparte
  @Input() numeroItems: string;

  //Preguntar como tomar otra descripcion
  //@Input() descripcionProducto: string;

  //Instanciar
  //2output
  @Output() inBorrar = new EventEmitter<string>();
  
  //3output
  inDelete(){
    this.inBorrar.emit(this.numeroItems);
  }

}
