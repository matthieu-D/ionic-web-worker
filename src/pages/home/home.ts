import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  result;

  constructor(public navCtrl: NavController, public ngZone: NgZone) {
    const myWorker = new Worker('./assets/workers/worker.js');

    myWorker.onmessage = (event) => {
      this.ngZone.run(()=> {
        this.result = event.data.join(',');
      })
    };

    myWorker.postMessage('startQuickSort');
  }
}
