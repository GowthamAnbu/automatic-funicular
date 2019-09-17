import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
    <div>
      Dashboard works
    </div>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    const mock = {
      title: '5 ?',
      author: 'That weird guy',
      gender: 'm',
      tags: [
        'Angular',
        'Quality Assurance',
        'Tester',
        'TEST'
      ]
    };
    // CREATE POST
    // this.http.post('http://localhost:3000/posts', mock).subscribe(d => console.log('ID is', d));
    // READ
    // this.http.get('http://localhost:3000/posts').subscribe(d => console.log('todos is', d));
    // PARTICULAR
    // this.http.get('http://localhost:3000/posts/3').subscribe(d => console.log('ID is', d));
    // UPDATE
    // this.http.put('http://localhost:3000/posts/4', {...mock, author: 'NEW'}).subscribe(console.log);
    // DELETE
    // this.http.delete('http://localhost:3000/posts/7').subscribe(console.log);
  }

}
