import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'article-container',
  templateUrl: './article-container.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class ArticleContainer implements OnInit {
  @Input() name: string;
  @Input() articlesData;
  thisArticles; 

  ngOnInit(){
    this.thisArticles = this.articlesData.filter(it=>it.container===this.name)
  }
}
