import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  form: FormGroup;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'name': new FormControl(null),
      'email': new FormControl(null),
    });
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
        this.form.setValue({
          'name': user.name,
          'email': user.email,
        })
      })
  }

  updateUser() {
    let user_id = this.route.snapshot.params['id'];
    let data = {
      'id': user_id,
      'name': this.form.value['name'],
      'email': this.form.value['email'],
    };
    this.http.post('http://localhost:3000/user/update', data)
      .subscribe((res) => {
        console.log(res);
      })
  }
}
