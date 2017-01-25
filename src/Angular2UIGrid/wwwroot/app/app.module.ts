import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule, JsonpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes.component";

import { HeroService } from "./hero.service";
import "./rxjs-operators";

@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule ],
  declarations: [AppComponent, HeroesComponent],
  providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
