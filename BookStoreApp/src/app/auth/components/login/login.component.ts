import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  GoToSignUp(): void {
    this.router.navigate(['auth/sign-up']);
  }

  GoToBookDetails(id: number, authorId: string): void {
    this.router.navigate(['public/book-details', id, 'author', authorId]);
  }

}
