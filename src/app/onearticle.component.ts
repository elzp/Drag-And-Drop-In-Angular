import {
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

interface positionObject {
  title: string;
  topPosition: number;
}
@Component({
  selector: 'onearticle',
  templateUrl: './onearticle.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class OneArticle implements AfterViewInit, OnChanges {
  @Input() name: string;
  @Input() title = '';
  @Input() content = '';
  @Input() date = '';
  @Input() dropped: boolean;
  @Output() sendPositionEvent = new EventEmitter<positionObject>();

  constructor(private el: ElementRef) {
    //from https://stackoverflow.com/a/69948220
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.dropped === changes.dropped.currentValue) {
      console.log(this.dropped);
      if (this.dropped === true) {
        console.log('update position after drop');
        const rect = this.el.nativeElement.getBoundingClientRect();
        this.sendPositionEvent.emit({
          title: this.title,
          topPosition: rect.top,
        });
      }
    }
  }

  ngAfterViewInit() {
    // from https://angular.io/api/core/AfterViewInit#ngAfterViewInit

    setTimeout(() => {
      const rect = this.el.nativeElement.getBoundingClientRect();
      this.sendPositionEvent.emit({
        title: this.title,
        topPosition: rect.top,
      });
    }, 1500);
  }
}
