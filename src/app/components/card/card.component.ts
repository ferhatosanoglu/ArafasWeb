import { Component, Input, OnInit } from '@angular/core';
import { BrandModel } from 'src/app/model/brands.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data!: BrandModel;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
