import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  form: FormGroup;

  constructor(private http: HttpClient, private router: Router) {
    this.form = new FormGroup({
      'name': new FormControl(null),
      'email': new FormControl(null),
    })
  }

  ngOnInit(): void {

  }

  createUser() {
    this.http.post('http://localhost:3000/user/create', this.form.value)
      .subscribe(res => {
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
          console.log('er')
        }, () => {
          console.log('completed');
        });
  }
}
