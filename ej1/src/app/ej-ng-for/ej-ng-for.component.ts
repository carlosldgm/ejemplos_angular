import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-ng-for',
  templateUrl: './ej-ng-for.component.html',
  styleUrls: ['./ej-ng-for.component.css']
})
export class EjNgForComponent implements OnInit {

  usuarios = ['pedro', 'juan', 'diego'];
  constructor() { }

  ngOnInit(): void {
  }

}
