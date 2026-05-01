//import { Component } from '@angular/core';
//import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
//import { ExploreContainerComponent } from '../explore-container/explore-container.component';

//@Component({
  //selector: 'app-tab3',
  //templateUrl: 'tab3.page.html',
  //styleUrls: ['tab3.page.scss'],
  //imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
//})
//export class Tab3Page {
 // constructor() {}
//}



import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [IonicModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 3</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <p>Conteúdo da Tab 3</p>
    </ion-content>
  `
})
export class Tab3Page {}