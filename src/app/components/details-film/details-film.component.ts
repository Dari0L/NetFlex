import { Component, Input, inject, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-details-film',
  templateUrl: './details-film.component.html',
  styleUrls: ['./details-film.component.scss']
})
export class DetailsFilmComponent implements OnInit{

  @Input() idContenuto!:{slug:number};

  private contentService = inject(ContentService);

  film$?:Observable<any>;

  addPreferito(id:number){

    this.contentService.addPreferito(id);
    console.log('aggiunto')
  }

  ngOnInit(): void {
    console.log(this.idContenuto.slug)
    this.film$=this.contentService.getContenutoById$(this.idContenuto.slug)
  }

}
