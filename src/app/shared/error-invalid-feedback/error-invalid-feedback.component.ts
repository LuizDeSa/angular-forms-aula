import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-invalid-feedback',
  templateUrl: './error-invalid-feedback.component.html',
  styleUrls: ['./error-invalid-feedback.component.css']
})
export class ErrorInvalidFeedbackComponent implements OnInit {

  @Input() mostrarErro!: boolean;
  @Input() mensagem!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
