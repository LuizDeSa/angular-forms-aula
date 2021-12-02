import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-valid-tooltip',
  templateUrl: './form-valid-tooltip.component.html',
  styleUrls: ['./form-valid-tooltip.component.css']
})
export class FormValidTooltipComponent implements OnInit {

  @Input() mostrarSucesso!: boolean;
  @Input() mensagem!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
