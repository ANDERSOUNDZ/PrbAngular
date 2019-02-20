import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //variable padre

  itemPadre = [''];
  //itemPadre = ['Item-00','Item-01','Item-02','Item-03','Item-04'];
  
  vr01 : string;

  
  //descripcion = ['Desc00','Desc001','Desc02','Desc03','Desc04'];

  constructor() { }

  ngOnInit() {
  }

  //4output

  outBorrar(numeroItems: string){
    this.itemPadre.splice(this.itemPadre.indexOf(numeroItems),1);
  }

  addItem(){
    //push agrega
    this.itemPadre.push(this.vr01);
  }

}
