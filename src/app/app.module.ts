import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NeckNoteComponent } from './components/neck-note/neck-note.component';
import { NeckLayoutComponent } from './components/neck-layout/neck-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NeckNoteComponent,
    NeckLayoutComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
