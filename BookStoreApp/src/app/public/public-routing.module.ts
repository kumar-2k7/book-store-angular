import { HomeComponent } from './components/home/home.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AllBookComponent } from './components/all-book/all-book.component';
import { PublicComponent } from './public.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "public", component: PublicComponent,
    children: [
      { path: "all-book", component: AllBookComponent },
      { path: "book-details/:bookID/author/:authorId", component: BookDetailsComponent },
      { path: "home", component: HomeComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
