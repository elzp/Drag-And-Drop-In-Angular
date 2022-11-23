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
    });
  }

  setCurrentUIData() {
    this.thisArticles = this.articlesData.filter(
      (it) => it.container === this.name
    );
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.articlesData !== changes.articlesData.currentValue) {
      this.setCurrentUIData();
    }
  }
}
