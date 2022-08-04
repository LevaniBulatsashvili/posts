import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import userInterface from '../interfaces/user.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts!: userInterface[]
  filterBy: string = ''

  constructor(private http: HttpClient) {
    this.http.get<userInterface[]>('https://jsonplaceholder.typicode.com/posts').subscribe(data => this.posts = data)

  }

  filter() {
    return this.posts.filter(post => post.body.toLowerCase().includes(this.filterBy.toLowerCase()))
  }

  ngOnInit(): void {
  }

}
