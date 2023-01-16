import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import type { RouterFeatures } from '@angular/router';
import { provideRouter, withDebugTracing } from '@angular/router';
import { appRoutes } from './app/app-routes';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const routerFeatures: RouterFeatures[] = [];
if (environment.production) {
  enableProdMode();
} else {
  routerFeatures.push(withDebugTracing());
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, ...routerFeatures),
    importProvidersFrom(AppModule),
  ],
}).catch((err) => {
  console.error(err);
});
