import { Component, OnInit } from '@angular/core';
import { BrandModel } from 'src/app/model/brands.model';
import { BrandService } from 'src/app/utils/services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  constructor(
    private _brandService: BrandService
  ) { }
  brandList?: BrandModel[];

  async ngOnInit() {
    this.brandList = await this._brandService.listAsync().then((res: any) => {
      return res.data.brands;
    });
  }

}
