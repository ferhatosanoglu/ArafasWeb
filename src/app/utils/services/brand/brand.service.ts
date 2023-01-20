import { Injectable } from '@angular/core';
import { ApiFetchService } from '../api-fetch/api-fetch.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private _apiFetchService: ApiFetchService) { }

  async listAsync() {
    return await this._apiFetchService.requestAsync(
      'GET',
      'brands',
      null!
    );
  }
}
