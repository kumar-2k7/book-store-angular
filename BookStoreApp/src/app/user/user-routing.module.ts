import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';

const routes: Routes = [
  {
    path: "user/:id", component: UserComponent,
    children: [
      { path: "add-book", component: AddBookComponent },
      { path: "delete-book/:bookID", component: DeleteBookComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
