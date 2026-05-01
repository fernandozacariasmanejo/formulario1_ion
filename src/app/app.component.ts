//import { Component } from '@angular/core';
//import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

//@Component({
  //selector: 'app-root',
  //templateUrl: 'app.component.html',
  //imports: [IonApp, IonRouterOutlet],
//})
//export class AppComp







import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // 👈 aqui
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}