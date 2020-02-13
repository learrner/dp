import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/services/http-services.service';
import { BeanData } from '../bean/static-data';
import { Router } from "@angular/router";
import { throwError } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public userList: [];
  searchText;
  errorMessage = '';

  constructor( private http: HttpServicesService, private bean: BeanData, private router: Router) { }

  ngOnInit() {
    this.http.getUsers().subscribe(res => {
      console.log(res)
      this.userList = res
    })
  }


  openUserComment(i) {
    this.http.getUserPostById(322333).subscribe((res) => {
      console.log(res)
      this.bean.postData = res;
      this.router.navigateByUrl("user-post")
    },
    (error) => {
      this.errorMessage = error.message; 
    }
    )
  }

}
