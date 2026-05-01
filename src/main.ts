//import { bootstrapApplication } from '@angular/platform-browser';
//import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
//import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
//import { routes } from './app/app.routes';
//import { AppComponent } from './app/app.component';

//bootstrapApplication(AppComponent, {
 // providers: [
    //{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    //provideIonicAngular(),
    //provideRouter(routes, withPreloading(PreloadAllModules)),
  //],
//});







import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { IonicModule } from '@ionic/angular';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(IonicModule.forRoot()),
    provideRouter(routes)
  ]
})
.catch(err => console.error(err));