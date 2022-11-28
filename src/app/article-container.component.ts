import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  HostListener,
  ChangeDetectorRef,
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
  currentPosition;
  @Output() changecontainerEvent = new EventEmitter<eventData>();
  @Output() sendpositionEvent = new EventEmitter<positionObject>();

  constructor(
    // private el: ElementRef,
    private changeDetectorRef: ChangeDetectorRef
  ){}

  ngOnInit() {
    this.setCurrentUIData();
    // @ViewChild(this.name) ghostEl: ElementRef<any>;
  }
  onDragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
  }
  onDragover(event) {
    event.preventDefault();
  }
  onDrop(event) {
    var data = event.dataTransfer.getData('text');
    console.log('position on drop', event.clientY);
    this.currentPosition = event.clientY;
    console.log('this.currentPosition', this.currentPosition);

    // this.sendpositionEvent.emit({
    //   title: data,
    //   topPosition: event.clientY,
    // });
    this.changecontainerEvent.emit({
      title: data,
      container: this.name,
      position: this.currentPosition,
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
