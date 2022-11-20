import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleContainer } from './article-container.component';
import { OneArticle } from './onearticle.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ArticleContainer, OneArticle],
  bootstrap: [AppComponent],
})
export class AppModule {}
