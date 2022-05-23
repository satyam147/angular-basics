import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  name: string = '';
  id: string = '';
  email: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    let user_id = this.route.snapshot.params['id'];
    this.http.post('http://localhost:3000/user/view', {id: user_id})
      .subscribe((res) => {
        let users = res as Array<Object>;
        let user = users[0] as {
          id: string,
          name: string,
          email: string
        };
        this.name = user.name;
        this.id = user.id;
        this.email = user.email;
      })
  }
}
