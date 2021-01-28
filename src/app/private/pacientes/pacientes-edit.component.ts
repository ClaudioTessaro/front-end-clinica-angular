import { AlertModalService } from '../../shared/alert-modal.service';
import { PacienteService } from './paciente.service';
import { CadastrarPaciente } from '../model/cadastrarPaciente';
import { PaisService } from '../../shared/pais.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesEditComponent extends BaseFormComponent implements OnInit {

  label: string = "Editar Paciente";

  idPaciente: number;

  private routeSub: Subscription;

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
    private _location: Location,
    private route: ActivatedRoute
    ) {
      super();
      this.getPaises();
  }

  ngOnInit(): void {

    this.routeSub = this.route.params.subscribe(async params => {
      this.idPaciente = params['id'];
   

    const paciente: CadastrarPaciente = await this.pacienteService.buscarPacientePorId(this.idPaciente).toPromise();

    
    this.formulario = this.formBuilder.group({
      nome: [paciente.nome,[Validators.required]],
      cpf: [paciente.cpf,[Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      sexo:[paciente.sexo],
      dataNascimento:[paciente.dataNascimento, [Validators.required]],
      email:[paciente.email, [Validators.required, Validators.email]],
      telefone:[paciente.telefone, [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      endereco: this.formBuilder.group({
        rua:[paciente.enderecoDTO.rua],
        numero:[paciente.enderecoDTO.numero],
        bairro:[paciente.enderecoDTO.bairro],
        cidade:[paciente.enderecoDTO.cidade],
        pais:[paciente.enderecoDTO.pais]

      })
    })
  })
}


  ngOnDestroy() {
    this.routeSub.unsubscribe();
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
