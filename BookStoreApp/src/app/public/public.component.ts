import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  bookId: number = 16;
  authorId: string = "Ajay";

  constructor() { }

  ngOnInit(): void {
  }

}
