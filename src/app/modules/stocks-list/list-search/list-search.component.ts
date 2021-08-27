import {Component, EventEmitter, Input, Output} from '@angular/core';
import {debounce} from "../../../core/decorators/debounce.decorator";

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.scss']
})
export class ListSearchComponent {
  @Input()
  public searchText = '';

  @Output()
  public searchHandler: EventEmitter<string> = new EventEmitter<string>()

  @debounce()
  public changeText() {
    this.searchHandler.emit(this.searchText)
  }
}
