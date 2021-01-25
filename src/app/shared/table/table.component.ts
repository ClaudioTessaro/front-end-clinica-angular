import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [],
  
})
export class TableComponent<T> {
  @Input() headerArray: string[];
  @Input() propertyArray: string[];
  @Input() contentArray: T[] = [];
  @Input() showEdit: boolean = false;
  @Input() showDelete: boolean = false;
  @Input() showDetail: boolean = false;
  @Output() emitEditButtonEvent = new EventEmitter();
  @Output() emitDeleteButtonEvent = new EventEmitter();
  @Output() emitDetailButtonEvent = new EventEmitter();
  @Input() loading: boolean = false;
  @Input() multiselect: boolean = false;
  @Output() multiselectEvent = new EventEmitter();
  seletedAll = false;
  selectedItems = [];

  constructor() {}

  ngOnInit() {
  }

  public emitSelectedItems() {
    this.multiselectEvent.emit(this.selectedItems);
  }

  public selectAll(selectAll) {
    if (selectAll) {
      this.selectedItems = this.contentArray.map(item => ({ ...item }));
    } else {
      this.selectedItems = [];
    }
    this.emitSelectedItems();
  }

  public getSelectedItems(content, { target: { checked } }) {
    if (checked) {
      this.selectedItems.push(content);
    } else {
      this.selectedItems = this.selectedItems.filter(({ id }) => {
        return id !== content.id;
      });
    }

    this.emitSelectedItems();
  }

  public editButtonEvent(content) {
    this.emitEditButtonEvent.emit(content);
  }

  public deleteButtonEvent(content) {
    this.emitDeleteButtonEvent.emit(content);
  }

  public detailButtonEvent(content) {
    this.emitDetailButtonEvent.emit(content);
  }

  isLoading() {
    this.loading = !this.loading;
  }

  setClass() {
    return this.loading ? 'filter-blur' : '';
  }


}
