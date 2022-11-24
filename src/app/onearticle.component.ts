import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'onearticle',
  templateUrl: './onearticle.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class OneArticle implements AfterViewInit {
  @Input() name: string;
  @Input() title = '';
  @Input() content = '';
  @Input() date = '';

  constructor(private el: ElementRef) {
    //from https://stackoverflow.com/a/69948220
  }

  ngAfterViewInit() {
    // from https://angular.io/api/core/AfterViewInit#ngAfterViewInit
    const rect = this.el.nativeElement.getBoundingClientRect();
    console.log(this.title, rect);
  }
}
