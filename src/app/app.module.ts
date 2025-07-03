import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';
import { WelcomeCardComponent } from './cards/welcome-card/welcome-card.component';
import { AlertCardComponent } from './cards/alert-card/alert-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardWrapperComponent,
    WelcomeCardComponent,
    AlertCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
