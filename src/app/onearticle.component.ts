import {
  Component,
  Input,
  ElementRef,
  // AfterViewInit,
  Output,
  EventEmitter,
  // OnChanges,
  // SimpleChanges,
  AfterViewChecked,
  // AfterContentInit,
  // DoCheck,
  // AfterContentChecked,
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
// AfterViewInit,
// AfterContentInit,
// DoCheck,
// AfterContentChecked,
//implements AfterViewChecked
export class OneArticle {
  @Input() name: string = '';
  @Input() title = '';
  @Input() content = '';
  @Input() date = '';
  checkedOnce = { name: '', checkedOnce: false };
  @Output() sendPositionEvent = new EventEmitter<positionObject>();

  constructor(private el: ElementRef) {
    //from https://stackoverflow.com/a/69948220
  }

  ngAfterViewChecked() {
    // if (!this.checkedOnce.checkedOnce && this.checkedOnce.name === '') {
    //   this.checkedOnce = { name: this.name, checkedOnce: true };
    //   console.log('ngAfterViewChecked');
    //   console.log(this.checkedOnce, 'title', this.title, 'topPosition', null);
    // } 
    // if (this.checkedOnce.checkedOnce) {
    //   console.log('this.checkedOnce.checkedOnce', this.checkedOnce.checkedOnce);
    //   this.checkedOnce.checkedOnce = false;

    //   setTimeout(() => {
    //     const rect = this.el.nativeElement.getBoundingClientRect();
    //     console.log('ngAfterViewChecked sending');
    //     console.log(
    //       this.checkedOnce,
    //       'title',
    //       this.title,
    //       'topPosition',
    //       rect.top
    //     );
    //     this.sendPositionEvent.emit({
    //       title: this.title,
    //       topPosition: rect.top,
    //     });
    //   }, 1000);
    // }
  }
}
