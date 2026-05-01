//import { Component } from '@angular/core';
//import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
//import { ExploreContainerComponent } from '../explore-container/explore-container.component';

//@Component({
  //selector: 'app-tab2',
  //templateUrl: 'tab2.page.html',
  //styleUrls: ['tab2.page.scss'],
  //imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
//})
//export class Tab2Page {

  //constructor() {}

//}



import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [IonicModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <p>Conteúdo da Tab 2</p>
    </ion-content>
  `
})
export class Tab2Page {}




