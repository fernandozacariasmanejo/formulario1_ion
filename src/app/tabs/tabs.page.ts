//import { Component, EnvironmentInjector, inject } from '@angular/core';
//import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
//import { addIcons } from 'ionicons';
//import { triangle, ellipse, square } from 'ionicons/icons';

//omponent({
  //selector: 'app-tabs',
  //templateUrl: 'tabs.page.html',
  //styleUrls: ['tabs.page.scss'],
  //imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
//})
//export class TabsPage {
  //public environmentInjector = inject(EnvironmentInjector);

  //constructor() {
    //addIcons({ triangle, ellipse, square });
  //}
//}





import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [IonicModule, RouterModule],
  template: `
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" [routerLink]="['/tab1']">
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" [routerLink]="['/tab2']">
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" [routerLink]="['/tab3']">
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `
})
export class TabsPage {}