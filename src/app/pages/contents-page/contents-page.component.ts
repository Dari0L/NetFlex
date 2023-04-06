import { ContentService } from 'src/app/services/content.service';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-contents-page',
  templateUrl: './contents-page.component.html',
  styleUrls: ['./contents-page.component.scss']
})
export class ContentsPageComponent{

  private route=inject(ActivatedRoute);

  private contentService = inject(ContentService);

  generi$=this.contentService.getGeneri$();




  slug$=this.route.params.pipe(
    tap(console.log)
  )
}
