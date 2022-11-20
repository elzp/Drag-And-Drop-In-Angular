import { Component, Input } from '@angular/core';

interface ArticleInt {
  name: string;
  date: string;
  content: string;
  container: string;
  position: number;
}

@Component({
  selector: 'article-container',
  templateUrl: './article-container.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class ArticleContainer {
  @Input() name: string;
  @Input() articlesData: Array<ArticleInt> = [
    {
      name: 'art1',
      date: '10.11.2022',
      content: 'art1',
      container: 'Drafts',
      position: -1,
    },
    {
      name: 'art2',
      date: '11.11.2022',
      content: 'art2',
      container: 'Drafts',
      position: -2,
    },
    {
      name: 'art3',
      date: '12.11.2022',
      content: 'art3',
      container: 'Drafts',
      position: -3,
    },
    {
      name: 'art4',
      date: '14.11.2022',
      content: 'art4',
      container: 'Published',
      position: -1,
    },
  ];
}
