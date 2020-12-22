import { AlertModalService } from './../../shared/alert-modal.service';
import { PacienteService } from './paciente.service';
import { CadastrarPaciente } from '../model/cadastrarPaciente';
import { PaisService } from './../../shared/pais.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { Location } from '@angular/common';



@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent extends BaseFormComponent implements OnInit {

   sexo = [
    {
      nome : "Masculino",
    },
    {
       nome : "Feminino"
    }
  ];


  paises: string[] = [];

  paciente: CadastrarPaciente;

  constructor(
    private formBuilder: FormBuilder,
    private paisesService: PaisService,
    private pacienteService: PacienteService,
    private modal: AlertModalService,
    private _location: Location
    ) {
      super();
      this.getPaises();
  }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nome: [null,[Validators.required]],
      cpf: [null,[Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      sexo:[null],
      dataNascimento:[null, [Validators.required]],
      email:[null, [Validators.required, Validators.email]],
      telefone:[null, [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      endereco: this.formBuilder.group({
        rua:[null],
        numero:[null],
        bairro:[null],
        cidade:[null],
        pais:[null]

      })
    })
  }

  submit() {
    let paciente: CadastrarPaciente;
    this.paciente = this.mapperCadastro(this.formulario, paciente);
    this.cadastrarPaciente(this.paciente);
    this.resetar();

  }

  getPaises(){
    return this.paisesService.buscarPaises().subscribe((response: any) => response.map( (pais:any) => this.paises.push(pais.nome)))

  }

  cadastrarPaciente(paciente: CadastrarPaciente){
    return this.pacienteService.cadastrarPaciente(paciente).subscribe((response: any) => {
     this.modal.showAlertSuccess(response.message)
    },
    (error:any) =>{
        if(!error.error.message){
          this.modal.showAlertDanger(error.error.message)
        }else{
          this.modal.showAlertDanger("Algo ocorreu errado. Por favor, contacte o Administrador do sistema!")
        }

    } );
  }

  voltar(){
    this._location.back();
  }


  mapperCadastro(formulario, paciente): CadastrarPaciente{
    paciente = {
      nome: formulario.get('nome').value,
      cpf: formulario.get('cpf').value,
      sexo: formulario.get('sexo').value,
      dataNascimento: formulario.get('dataNascimento').value,
      email: formulario.get('email').value,
      telefone: formulario.get('telefone').value,
      enderecoDTO: {
        rua:formulario.get('endereco.rua').value,
        numero:formulario.get('endereco.numero').value,
        bairro:formulario.get('endereco.bairro').value,
        cidade:formulario.get('endereco.cidade').value,
        pais:formulario.get('endereco.pais').value,
      }
    }
    return paciente;
  }


}
