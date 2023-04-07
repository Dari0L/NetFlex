import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-contents-detail-page',
  templateUrl: './contents-detail-page.component.html',
  styleUrls: ['./contents-detail-page.component.scss']
})
export class ContentsDetailPageComponent {

  private route=inject(ActivatedRoute);




  slug$=this.route.params.pipe(
    tap(console.log)
  )
}
