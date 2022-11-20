import { Component, Input } from '@angular/core';



@Component({
  selector: 'article-container',
  templateUrl: './article-container.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class ArticleContainer {
  @Input() name: string;
  @Input() articlesData;
}
