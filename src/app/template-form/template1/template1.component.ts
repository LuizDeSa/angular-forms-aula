import { ConsultaCepService } from './../../shared/services/consulta-cep.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css']
})
export class Template1Component implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  constructor(
    private http: HttpClient,
    private consultaCepService: ConsultaCepService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form);
    console.log(this.usuario);


    //site https://resttesttest.com/
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value)).subscribe(
      dados => {
        console.log(dados);
        alert('Dados envidos com sucesso');
        form.form.reset();
      },
      error => {
        alert('Erro ao enviar os dados da aplicação: status:: '+error.status);
        console.log(error);
      }
    );

  }

  verificarValidTouched(campo: any){
    return !campo.valid && campo.touched;
  }

  aplicarCssErro(campo: any){

    return {
      'was-validated': this.verificarValidTouched(campo) //, outras classes e condições
    }
  }

  consultarCEP(cep: any, form: NgForm){
    this.consultaCepService.consultarCEP(cep).subscribe(dados=>{
      if(dados){
        this.popularDadosForm(dados, form);
      }else{
        this.limparDadosEnderecoForm(form);
        alert("Formato de CEP inválido.");
      }
    });
 }

 popularDadosForm(dados: any, form: NgForm){
  console.log(dados);
  if (!("erro" in dados)) {
    console.log(dados);
    form.form.patchValue({//atualiza apaenas os arquivos que queremos
      endereco: {
        cep: dados.cep ,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }else{
    //CEP não Encontrado.
    this.limparDadosEnderecoForm(form);
    alert("CEP não encontrado.");
  }

}

limparDadosEnderecoForm(form: NgForm){
    form.form.patchValue({//atualiza apaenas os arquivos que queremos
    endereco: {
      complemento: null,
      rua: null,
      bairro: null,
      cidade: null,
      estado: null
    }
  });

}


}
