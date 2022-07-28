import { Component } from '@angular/core';
import { HighlightAutoResult } from 'ngx-highlightjs';


@Component({
  selector: 'app-lazy-test',
  templateUrl: './lazy-test.component.html',
  styleUrls: ['./lazy-test.component.scss']
})
export class LazyTestComponent {

  response: HighlightAutoResult;
  code = `.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  margin: 1em;
  position: relative;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}`;

  onHighlight(e: HighlightAutoResult) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      secondBest: '{...}',
      value: '{...}'
    }
  }
}
