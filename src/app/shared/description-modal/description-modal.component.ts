import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-description-modal',
  templateUrl: './description-modal.component.html',
  styleUrls: ['./description-modal.component.css']
})
export class DescriptionModalComponent implements OnInit {

  confirmResult: Subject<boolean>;


  constructor(public bsModalRef: BsModalRef,
    private route: Router) {

   }

  ngOnInit() {
    this.confirmResult = new Subject();
  }

  onAgenda() {
    this.route.navigate(["/agenda"]);
    this.confirmAndClose(true)
  }

  onClose() {
    this.confirmAndClose(false);
  }

  onProntuario(){
    this.route.navigate(["/prontuario"]);
    this.confirmAndClose(true)

  }

  private confirmAndClose(value: boolean) {
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }

}
