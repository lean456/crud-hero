import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLoading = new Subject<boolean>();

  constructor() {}

  show() {
    console.log('showing loader');
    this.isLoading.next(true);
  }

  hide() {
    console.log('hiding loader');
    this.isLoading.next(false);
  }
}
