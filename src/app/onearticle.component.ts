import {
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';

interface positionObject {
  title: string;
  topPosition: number;
}
@Component({
  selector: 'onearticle',
  templateUrl: './onearticle.component.html',
  styles: [`h1 { font-family: Lato; }`],
}) //AfterViewInit,
export class OneArticle implements AfterViewInit {
  //implements OnInit {
  @Input() name: string;
  @Input() title = '';
  @Input() content = '';
  @Input() date = '';
  @Input() position;
  @Output() sendPositionEvent = new EventEmitter<positionObject>();

  constructor(private el: ElementRef) {
    //from https://stackoverflow.com/a/69948220
    // const rect = this.el.nativeElement.getBoundingClientRect();
    // console.log('cis',  rect.top);
    // this.sendPositionEvent.emit({
    //   title: this.title,
    //   topPosition: rect.top,
    // });
  }

  ngAfterViewInit() {
    //   // from https://angular.io/api/core/AfterViewInit#ngAfterViewInit
    // console.log(this.position );
    // setTimeout(() => {
    //https://stackoverflow.com/a/72021564
    if (this.position === 0) {
      console.log('ngAfterViewInit');

      const rect = this.el.nativeElement.getBoundingClientRect();
      this.sendPositionEvent.emit({
        title: this.title,
        topPosition: rect.top,
      });
    }
    // }, 100);
  }
}
