import { Component, Input, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: [],
})
export class ActionModalComponent {
  @Input() title: string = '';
  @Input() onConfirm: () => void = () => null;

  @ViewChild(IonModal) modal!: IonModal;

  // TODO fix bug when click Esc or outside not working
  onCancel() {
    this.modal.isOpen = false;
  }

  handleConfirm() {
    this.onConfirm();

    this.modal.isOpen = false;
  }
}
