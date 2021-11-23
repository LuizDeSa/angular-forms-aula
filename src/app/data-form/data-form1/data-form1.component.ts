import { EstadosBrService } from './../../shared/services/estadosBr.service';
import { Estado } from './../../shared/models/estado';
import { JsonPipe } from '@angular/common';
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-data-form1',
  templateUrl: './data-form1.component.html',
  styleUrls: ['./data-form1.component.css']
})
export class DataForm1Component implements OnInit {

  formulario!: FormGroup; // variavel que vai representar o formulário que vamos utilizar no componente
  estados!: Estado[];

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private estadosBrService: EstadosBrService) { }

  ngOnInit(): void {

    this.estadosBrService.getEstadosBr().subscribe(dados => {
      console.log(dados);
      this.estados=dados;
      this.imprimirEstado();
    });

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      sobrenome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      data_nascimento: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(40)]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required]],
        complemento: [],
        rua: [null, [Validators.required]],
        numero: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]],
      })
    });

  }

  imprimir(){
    console.log(this.formulario)
  }

  imprimirEstado(){
    console.log(this.estados);
  }

  onSubmit(): void{
    console.log(this.formulario);

    if(this.formulario.valid){

      //site https://resttesttest.com/
      this.http.post<HttpResponse<string>>('https://httpbin.org/post', JSON.stringify(this.formulario.value)).subscribe(
        dados => {
          console.log(dados);

          alert('Dados envidos com sucesso');

          // this.resetar();

        },
        (error: any) => {
          alert('Erro ao enviar os dados da aplicação: status:: '+error.status);
          console.log(error);
        },
      );
    }else{
      console.log('Formulário invalido');
      this.verificarValidacoesForm(this.formulario);
    }
  }

  verificarValidacoesForm(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle?.markAsDirty();
      if(controle instanceof FormGroup){
        this.verificarValidacoesForm(controle);
      }
    });
  }

  resetar(): void{
    this.formulario.reset();
  }

  aplicarCssErro(campo: string){
    return {
      'is-invalid': this.verificarValidAndTouchedOrDirty(campo) //, outras classes e condições
    }
  }

  verificarValidAndTouchedOrDirty(campo: string){
    return this.formulario.get(campo)?.invalid && (this.formulario.get(campo)?.touched||this.formulario.get(campo)?.dirty);
  }

  verificarErroCampoObrigatorio(campo: string): boolean{
    let campo1 = this.formulario.get(campo);
    return this.verificarValidAndTouchedOrDirty(campo) && campo1?.getError('required');
  }

  verificarErroMinLength(campo: string){
    let campo1 = this.formulario.get(campo);
    return campo1?.getError('minlength');
  }

  verificarErroMaxLength(campo: string){
    let campo1 = this.formulario.get(campo);
    return campo1?.getError('maxlength');
  }

  consultarCEP(){
    //Nova variável "cep" somente com dígitos.

    let cep = this.formulario.get('endereco.cep')?.value;

    cep = cep.replace(/\D/g, '');
    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP.
      if(validacep.test(cep)) {

        this.limparDadosEnderecoForm();

        this.http.get(`https://viacep.com.br/ws/${cep}/json`).subscribe(resposta => {
        this.popularDadosForm(resposta);

        });
      }else{
        //cep é inválido.
        this.limparDadosEnderecoForm();
        alert("Formato de CEP inválido.");
      }
    }
  }

  limparDadosEnderecoForm(){
    this.formulario.patchValue({//atualiza apaenas os arquivos que queremos
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });

    this.formulario.get('nome')?.setValue('Luiz');//Só para mostrar que é possivel setar apenas um valor caso seja necessario
  }

  popularDadosForm(dados: any){
    console.log(dados);
    if (!("erro" in dados)) {
      console.log(dados);
      this.formulario.patchValue({//atualiza apaenas os arquivos que queremos
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
      this.limparDadosEnderecoForm();
      alert("CEP não encontrado.");
    }

  }
}
