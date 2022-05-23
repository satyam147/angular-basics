import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[]= [];
  constructor(private http: HttpClient) {
    this.getUsers();
  }

  ngOnInit(): void {
  }
  getUsers(){
    this.http.post('http://localhost:3000/user/list',{})
      .subscribe((res) => {
        this.users = res as Array<Object>;
      })
  }

  deleteUser(id: string,name:string){
    let cnf = confirm(`Are you sure to delete user ${name}?`);
    if(cnf){
      this.http.post('http://localhost:3000/user/delete',{'id':id})
        .subscribe((res)=>{
          this.getUsers();
        })
    }
  }
}
