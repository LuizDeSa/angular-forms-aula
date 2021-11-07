import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-invalid-tooltip',
  templateUrl: './error-invalid-tooltip.component.html',
  styleUrls: ['./error-invalid-tooltip.component.css']
})
export class ErrorInvalidTooltipComponent implements OnInit {

  @Input() mostrarErro!: boolean;
  @Input() mensagem!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
