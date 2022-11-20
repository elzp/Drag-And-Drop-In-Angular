import { Component, Input } from '@angular/core';

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
}
