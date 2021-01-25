import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pagination } from './pagination.interface';

@Component({
  selector: 'app-default-pagination',
  templateUrl: './default-pagination.component.html',
  styleUrls: [],
})
export class DefaultPaginationComponent {
  @Input() paginacao: Pagination;
  @Input() pageSizes: Array<number>;
  @Input() maxButtons: number;
  @Output() paginationChanged: EventEmitter<number> = new EventEmitter();
  @Output() pageSizeChanged: EventEmitter<number> = new EventEmitter();
  constructor() {}

  pageChange(pgNumber: number) {
    this.paginationChanged.emit(pgNumber);
  }

  pageSizeChange(value: string) {
    this.pageSizeChanged.emit(parseInt(value, 10));
  }
}
