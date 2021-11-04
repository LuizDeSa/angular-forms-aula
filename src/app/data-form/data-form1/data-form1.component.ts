import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-data-form1',
  templateUrl: './data-form1.component.html',
  styleUrls: ['./data-form1.component.css']
})
export class DataForm1Component implements OnInit {

  formulario!: FormGroup; // variavel que vai representar o formulário que vamos utilizar no componente

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient) { }

  ngOnInit(): void {

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    this.formulario = this.formBuilder.group({
      nome: [null],
      sobrenome: [null],
      data_nascimento: [null],
      email: [null],
    });

  }

  imprimir(){
    console.log(this.formulario)
  }

  onSubmit(): void{
    console.log(this.formulario);
    //site https://resttesttest.com/
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value)).subscribe(
      dados => {
        console.log(dados)
        alert('Dados envidos com sucesso');
      },
      error => {
        alert('Erro ao enviar os dados da aplicação: status:: '+error.status);
        console.log(error);
      }
    );

  }




}
