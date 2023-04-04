import { Component, OnInit } from '@angular/core';
interface Movies {
  nome: string;
  url: string;
  description:string
}
import { film } from 'src/app/mocks/films';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {

movies=film.films

  responsiveOptions: any[]=[];

  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }


}
/*
[
  {nome:'Movie',url:'https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg',description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  {nome:'Movie',url:'https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg',description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  {nome:'Movie',url:'https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg',description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  {nome:'Movie',url:'https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg',description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  {nome:'Movie',url:'https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg',description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  {nome:'Movie',url:'https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg',description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  {nome:'Movie',url:'https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg',description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  {nome:'Movie',url:'https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg',description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  {nome:'Movie',url:'https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg',description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  {nome:'Movie',url:'https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg',description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  {nome:'Movie',url:'https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg',description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},

]
*/
