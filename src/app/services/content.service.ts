import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { film } from '../mocks/films';
import { filter, of, tap, toArray } from 'rxjs';

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
    //return this.http.get<{id:number,nome:string}[]>(URL);
    return of([{id:1,nome:'genere1'},{id:2,nome:'genere2'}]).pipe(
      tap(console.log)
    );
  }
  //in home mando solo l'id
  getContenutiByGenere$(idGenere:number,categoria:string|null){
    if(categoria){
      const URL=this.BASE_URL+'';
      return this.http.get(URL);
    }else{
      // contenuto/getcontenuti/id(del genere)
      const URL=this.BASE_URL+'contenuto/getcontenuti/'+idGenere;
      //return this.http.get(URL);
      return of(this.mock).pipe(
        tap(console.log)
      );
    }
  }

  getContenutiByTitolo$(titolo:string){
    return of(...this.mock).pipe(
      filter((film)=>{return film.title.startsWith(titolo)}),
      toArray()
    )
  }


}
