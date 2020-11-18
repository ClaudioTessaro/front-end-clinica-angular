import { FormValidations } from './../../shared/form-validations';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent extends BaseFormComponent implements OnInit {



  constructor(
    private formBuilder: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nome: [null,[Validators.required, Validators.minLength(5)]],
      email: [null]
    })
  }

  submit() {
    throw new Error('Method not implemented.');
  }

}
