import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { film } from '../mocks/films';
import { filter, of, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  http=inject(HttpClient);
  BASE_URL='http://localhost:8080';
  constructor() { }

  mock=film.films;
  getGeneri$(){
    const URL=this.BASE_URL+'';
    return this.http.get(URL);
  }
  //in home mando solo l'id
  getContenutiByGenere$(idGenere:number,categoria?:string){
    if(categoria){
      const URL=this.BASE_URL+'';
      return this.http.get(URL);
    }else{
      // contenuto/getcontenuti/id(del genere)
      const URL=this.BASE_URL+'contenuto/getcontenuti/'+idGenere;
      return this.http.get(URL);
    }
  }

  getContenutiByTitolo$(titolo:string){
    return of(...this.mock).pipe(
      filter((film)=>{return film.title.startsWith(titolo)}),
      toArray()
    )
  }


}
