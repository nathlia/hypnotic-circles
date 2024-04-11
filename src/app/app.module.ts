import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircleOneComponent } from './circle-one/circle-one.component';
import { CircleTwoComponent } from './circle-two/circle-two.component';
import { CircleThreeComponent } from './circle-three/circle-three.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleOneComponent,
    CircleTwoComponent,
    CircleThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
