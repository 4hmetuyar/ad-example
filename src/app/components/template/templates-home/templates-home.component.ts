import {Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-templates-home',
  templateUrl: './templates-home.component.html',
  styleUrls: ['./templates-home.component.css']
})
export class TemplatesHomeComponent implements OnInit {

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

}
