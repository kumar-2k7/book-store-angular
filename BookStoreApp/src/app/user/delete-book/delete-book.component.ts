import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  bookId: number = 0;
  userId: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((d)=>{
      this.bookId = d['bookID'];
      this.userId = d['id'];
    })
    
    this.route.parent?.params.subscribe((d)=>{ 
      this.userId = d['id'];
    })
  }

}
