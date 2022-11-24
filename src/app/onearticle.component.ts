import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'onearticle',
  templateUrl: './onearticle.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class OneArticle {
  @Input() name: string;
  @Input() title = '';
  @Input() content = '';
  @Input() date = '';

  constructor(private el: ElementRef) {
    //from https://stackoverflow.com/a/69948220
    const rect = this.el.nativeElement.getBoundingClientRect();
    console.log(this.name, rect);
  }
}
