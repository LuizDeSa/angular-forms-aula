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

  constructor(private http: HttpClient) { }

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
    //Nova variável "cep" somente com dígitos.
   var cep = cep.replace(/\D/g, '');
   //Verifica se campo cep possui valor informado.
   if (cep != "") {
     //Expressão regular para validar o CEP.
     var validacep = /^[0-9]{8}$/;
     //Valida o formato do CEP.
     if(validacep.test(cep)) {

       this.limparDadosEnderecoForm(form);

       this.http.get(`https://viacep.com.br/ws/${cep}/json`).subscribe(resposta => {
         this.popularDadosForm(resposta, form);

       });
     }else{
       //cep é inválido.
       this.limparDadosEnderecoForm(form);
       alert("Formato de CEP inválido.");
     }
   }
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
