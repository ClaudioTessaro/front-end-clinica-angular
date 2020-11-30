export interface CadastrarPaciente{

   nome: string,
   cpf: string,
   sexo: string,
   dataNascimento: Date,
   email: string,
   telefone: string,
   enderecoDTO: {
        rua:string,
        numero:string,
        bairro:string,
        cidade:string,
        pais:string,
    }
}
