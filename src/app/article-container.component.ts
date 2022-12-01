import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

interface eventData {
  title: string;
  container: string;
  position: number;
}

interface positionObject {
  title: string;
  topPosition: number;
}

@Component({
  selector: 'article-container',
  templateUrl: './article-container.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class ArticleContainer implements OnInit, OnChanges {
  @Input() name: string;
  @Input() articlesData;
  thisArticles;
  @Output() changecontainerEvent = new EventEmitter<eventData>();
  @Output() sendpositionEvent = new EventEmitter<positionObject>();

  ngOnInit() {
    this.setCurrentUIData();
  }
  onDragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
  }
  onDragover(event) {
    event.preventDefault();
  }
  onDrop(event) {
    var data = event.dataTransfer.getData('text');
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
        return a.position - b.position;
      });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.articlesData !== changes.articlesData.currentValue) {
      this.setCurrentUIData();
    }
  }

  changePosition(data) {
    this.sendpositionEvent.emit({
      title: data.title,
      topPosition: data.topPosition,
    });
  }
}
