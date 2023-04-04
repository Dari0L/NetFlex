import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import {ImageModule} from 'primeng/image';
import {CardModule} from 'primeng/card';



@NgModule({
 exports:[
  CarouselModule,
  ButtonModule,
  ImageModule,
  CardModule
 ]
})
export class PrimeNgModule { }
