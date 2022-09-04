import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { HomeComponent } from './components/home/home.component';
import { AllBookComponent } from './components/all-book/all-book.component';


@NgModule({
  declarations: [
    PublicComponent,
    BookDetailsComponent,
    HomeComponent,
    AllBookComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
