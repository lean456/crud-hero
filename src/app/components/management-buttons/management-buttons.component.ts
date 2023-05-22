import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-management-buttons',
  templateUrl: './management-buttons.component.html',
  styleUrls: ['./management-buttons.component.scss'],
})
export class ManagementButtonsComponent {
  @Output() delete: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() edit: EventEmitter<boolean> = new EventEmitter<boolean>();
  deleteHero() {
    this.delete.emit(true);
  }

  editHero() {
    this.edit.emit(true);
  }
}
