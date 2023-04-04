import { Component } from '@angular/core';
  type item={
    label:string,
    path:string
  }
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navItems:item[]=[
    {label:'Home',path:''},
    {label:'Film',path:'catalogo/film'},
    {label:'Serie',path:'catalogo/serie'},
    {label:'Documentari',path:'catalogo/doc'},
    {label:'Spettacoli',path:'catalogo/spet'},
    {label:'Preferiti',path:'list'}]
}
