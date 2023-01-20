import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { BrandComponent } from './pages/brand/brand.component';

const routes: Routes = [

  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'brand', component: BrandComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
