import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DragandDropComponent } from './article-container.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DragandDropComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
