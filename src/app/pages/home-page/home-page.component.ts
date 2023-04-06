import { Component, inject } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  private contentService = inject(ContentService);

  generi$=this.contentService.getGeneri$();


}
