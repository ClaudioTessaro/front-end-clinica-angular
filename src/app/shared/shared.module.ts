import { BootstrapModule } from './bootstrap.module';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { DescriptionModalComponent } from './description-modal/description-modal.component';
import { TableComponent } from './table/table.component';
import { DefaultPaginationComponent } from './default-pagination/default-pagination.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AlertModalComponent,
    ConfirmModalComponent,
    InputFieldComponent,
    ErrorMsgComponent,
    DescriptionModalComponent,
    TableComponent,
    DefaultPaginationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    BootstrapModule,
    NgbModule,
    NgbPaginationModule
  ],
  exports:[
    InputFieldComponent,
    ErrorMsgComponent,
    TableComponent,
    DefaultPaginationComponent
  ]
})
export class SharedModule { }
