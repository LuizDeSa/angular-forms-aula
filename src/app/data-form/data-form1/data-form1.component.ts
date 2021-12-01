import { FormValidations } from './../../shared/form-validations';
import { RadioService } from './../../shared/services/radio.service';
import { SelectService } from './../../shared/services/select.service';
import { Tecnologia } from './../../shared/models/tecnologia';
import { Cargo } from './../../shared/models/cargo';
import { ConsultaCepService } from './../../shared/services/consulta-cep.service';
import { Estado } from './../../shared/models/estado';
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-form1',
  templateUrl: './data-form1.component.html',
  styleUrls: ['./data-form1.component.css']
})
export class DataForm1Component implements OnInit {

  formulario!: FormGroup; // variavel que vai representar o formulário que vamos utilizar no componente
  // estados!: Estado[];
  estados!: Observable<Estado[]>;
  cargos!: Observable<Cargo[]>;
  tecnologias!: Observable<Tecnologia[]>;
  newLatterOp!: Observable<any[]>;
  frameworks = ['Angular', 'VueJs', 'ReactJs', 'Bootstrap', 'Spring'];

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private consultaCepService: ConsultaCepService,
              private selectService: SelectService,
              private radioService: RadioService,
              ) { }

  ngOnInit(): void {

    this.estados = this.selectService.getEstadosBr();
    this.cargos = this.selectService.getCargos();
    this.tecnologias = this.selectService.getTecnologias();
    this.newLatterOp = this.radioService.getNewLatter();

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
      }),
      cargo: [null],
      tecnologias: [null],
      newslatter: ['s'],
      termos: [null, [Validators.required, Validators.pattern('true')]],
      frameworks: this.buildFrameworks()
    });

  }

  buildFrameworks(): FormArray{
    const values = this.frameworks.map(v=> new FormControl(false));
    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));
  }

  getFrameworksControls(){
    let formArray =  this.formulario.controls['frameworks'] as FormArray;
    return formArray.controls;
  }

  getFrameworks(): FormArray{
    let formArray =  this.formulario.controls['frameworks'] as FormArray;
    return formArray;
  }

  imprimir(){
    console.log(this.formulario)
  }

  imprimirEstado(){
    console.log(this.estados);
  }

  onSubmit(): void{
    console.log(this.formulario);

    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks.map((v:any, i:any)=> v ? this.frameworks[i] : null).filter((v:any) => v !== null)
    });

    console.log(valueSubmit);


    if(this.formulario.valid){

      //site https://resttesttest.com/
      this.http.post<HttpResponse<string>>('https://httpbin.org/post', JSON.stringify(valueSubmit)).subscribe(
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
      // console.log(campo);
      const controle = formGroup.get(campo);
      controle?.markAsDirty();
      controle?.markAsTouched();
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

  verificarValidAndTouchedOrDirty(campo: string): boolean{
    return (this.formulario.get(campo)?.invalid && (this.formulario.get(campo)?.touched||this.formulario.get(campo)?.dirty))||false;
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
    const cep = this.formulario.get('endereco.cep')?.value;
    this.consultaCepService.consultarCEP(cep).subscribe(dados=>{
      if(dados){
        this.popularDadosForm(dados);
      }else{
        this.limparDadosEnderecoForm();
        alert("Formato de CEP inválido.");
      }
    });
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

  setarCargo(){
    const cargo = {nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'} as Cargo;
    this.formulario.get('cargo')?.setValue(cargo);
  }

  setarTecnologia(){
    const tecnologia = {nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'} as Tecnologia;
    this.formulario.get('tecnologias')?.setValue(['java', 'php', 'ruby']);
  }

  compararCargos(cargo1: Cargo, cargo2: Cargo){
    return cargo1 && cargo2 ? (cargo1.nome===cargo2.nome && cargo1.nivel===cargo2.nivel): cargo1 === cargo2;
  }

  compararTecnologias(tecnologia1: Tecnologia, tecnologia2: Tecnologia){
    return tecnologia1 && tecnologia1 ? (tecnologia1.nome===tecnologia1.nome && tecnologia1.desc===tecnologia1.desc): tecnologia1 === tecnologia1;
  }
}
