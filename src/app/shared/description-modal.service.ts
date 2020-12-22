import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';
import { DescriptionModalComponent } from './description-modal/description-modal.component';


@Injectable({
  providedIn: 'root'
})
export class DescriptionModalService {

  constructor(private modalService: BsModalService) {}

  showDescription(){
    const bsModalRef: BsModalRef = this.modalService.show(DescriptionModalComponent, Object.assign({}, { class: 'gray modal-lg' }));
    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  }

}
