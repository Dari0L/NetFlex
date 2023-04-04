import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-contents-page',
  templateUrl: './contents-page.component.html',
  styleUrls: ['./contents-page.component.scss']
})
export class ContentsPageComponent {

  private route=inject(ActivatedRoute);

  contents$=this.route.params.pipe(
    tap(console.log)
  ).subscribe();
}
