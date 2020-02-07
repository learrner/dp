import { Component, OnInit } from '@angular/core';
import { BeanData } from '../bean/static-data';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
  userpostData: any[];
  searchText;

  constructor(private bean: BeanData) { }

  ngOnInit() {
    this.userpostData = this.bean.postData
    console.log(this.bean.postData)
  }

}
