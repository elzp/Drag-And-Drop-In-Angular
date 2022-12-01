import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ArticleInt } from './interfaces';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
}) //implements OnChanges
export class AppComponent {
  name = ['Drafts', 'Published'];

  articlesData: Array<ArticleInt> = [
    {
      name: 'art1',
      date: '10.11.2022',
      content: 'art1',
      container: 'Drafts',
      position: null,
    },
    {
      name: 'art2',
      date: '11.11.2022',
      content: 'art2',
      container: 'Drafts',
      position: null,
    },
    {
      name: 'art3',
      date: '12.11.2022',
      content: 'art3',
      container: 'Drafts',
      position: null,
    },
    {
      name: 'art4',
      date: '14.11.2022',
      content: 'art4',
      container: 'Published',
      position: null,
    },
  ];
  changeContainer(data) {
    const articlesAfterChange = this.articlesData.map((it) => {
      it;
      if (it.name === data.title) {
        console.log( data.title,'przed', it.position);
        it.position = data.position;
        console.log(data.title,'po', data.position);
        it.container =
          it['container'] === data.container ? it.container : data.container;
      }

      return it;
    });
    this.articlesData = [...articlesAfterChange];
  }

  changePosition(data) {
    console.log(data);
    this.articlesData = this.articlesData.map((it) => {
      if (data.title === it.name) {
        it.position = data.topPosition;
      }
      return it;
    });
  }
}
