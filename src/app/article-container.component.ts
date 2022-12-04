import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ArticleInt, eventData, positionObject } from './interfaces';

@Component({
  selector: 'article-container',
  templateUrl: './article-container.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class ArticleContainer implements OnInit, OnChanges {
  @Input() name: string = '';
  @Input() articlesData: Array<ArticleInt> = [];
  thisArticles: Array<ArticleInt> = [];
  @Output() changecontainerEvent = new EventEmitter<eventData>();
  @Output() sendpositionEvent = new EventEmitter<positionObject>();

  ngOnInit() {
    this.setCurrentUIData();
  }
  onDragStart(event: DragEvent) {
    let divTarget = event.target as Element;
    const id: string = divTarget?.id || '';
    event?.dataTransfer?.setData('text', id);
  }
  onDragover(event: Event) {
    event.preventDefault();
  }
  onDrop(event: DragEvent) {
    var data = event?.dataTransfer?.getData('text')|| '' ;

    this.changecontainerEvent.emit({
      title: data,
      container: this.name,
      position: event.pageY,
    });
  }

  setCurrentUIData() {
    this.thisArticles = this.articlesData
      .filter((it) => it.container === this.name)
      .sort((a, b) => {
        return (a.position || 0) - (b.position || 0);
      });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['articlesData'] !== changes['articlesData'].currentValue) {
      this.setCurrentUIData();
    }
  }

  changePosition(data: positionObject) {
    this.sendpositionEvent.emit({
      title: data.title,
      topPosition: data.topPosition,
    });
  }
}