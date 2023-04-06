import { Component, inject } from '@angular/core';
import { Subject, concatMap, debounceTime, switchMap, tap, toArray } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent  {

  contentService=inject(ContentService);
  text$ = new Subject<string>();
  printlog(input: Event) {
    if (this.isEventAndInputEventWithTarget(input)) {
      console.log(input.target.value);
      this.text$.next(input.target.value);
    }
  }
  isEventAndInputEventWithTarget(event: Event): event is (InputEvent & { target: HTMLInputElement }) {
    return event instanceof InputEvent && !!(event.target) && event.target instanceof HTMLInputElement;
  }
  films$=this.text$.pipe(
    debounceTime(200),
    tap((value)=>{
      console.log(value);
    }),
    switchMap((value)=>(this.contentService.getContenutiByTitolo$(value))),


  );

}
