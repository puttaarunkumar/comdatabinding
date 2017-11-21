import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  posts: any[];

  constructor(private http:Http){
    http.get("https://jsonplaceholder.typicode.com/posts")
    .subscribe(response => {
      this.posts = response.json();
    });
  }

  createpost(bond: HTMLInputElement){
    let tent = { title: bond.value }
    this.http.post("https://jsonplaceholder.typicode.com/posts", JSON.stringify(tent))
    .subscribe(response => {
      tent['id'] = response.json().id;
      this.posts.splice(0, 0, tent);
     
    });
  }

  
}
