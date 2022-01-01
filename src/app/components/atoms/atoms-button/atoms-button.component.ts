import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-atoms-button',
  templateUrl: './atoms-button.component.html',
  styleUrls: ['./atoms-button.component.css']
})
export class AtomsButtonComponent implements OnInit {

  @Input()
  buttonLabel: string = 'Basic';
  constructor() { }

  ngOnInit(): void {
  }

}
