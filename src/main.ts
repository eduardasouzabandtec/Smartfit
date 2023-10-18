import { provideRouter } from "@angular/router";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from "./app/app.component";
import { routes } from "./app/app.routing";

  
bootstrapApplication(AppComponent, {providers: [provideRouter(routes), provideAnimations(), provideAnimations()]});