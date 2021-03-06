import { Component } from '@angular/core';
import { OneSignalService } from 'ngx-onesignal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public readonly onesignal: OneSignalService) {
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    (<any> window).ngxOnesignal = onesignal;
  }

  onSubscribe() {
    this.onesignal.subscribe();
  }

  onUnSubscribe() {
    this.onesignal.unsubscribe();
  }
}
