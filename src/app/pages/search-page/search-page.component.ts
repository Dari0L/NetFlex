import { Component } from '@angular/core';
import { Subject, debounceTime, tap } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent  {

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
  valueDebounced$=this.text$.pipe(
    debounceTime(500),
    tap((value)=>{
      console.log(value);
    })
  );

}
