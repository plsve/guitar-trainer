import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NeckNoteComponent } from './components/neck-note/neck-note.component';
import { NeckLayoutComponent } from './components/neck-layout/neck-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NeckNoteComponent,
    NeckLayoutComponent,
    MainLayoutComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
