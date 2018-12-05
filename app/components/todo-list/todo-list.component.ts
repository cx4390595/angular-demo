import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../service/storage.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public userName :any;
  public list = [];
  constructor(private storage:StorageService) {
    console.log(this.storage)
  }

  ngOnInit() {
    var todolist=this.storage.getItem('todolist')
    if(todolist){
      this.list= todolist
    }

  }
  addData(e){


    if(e.keyCode ===13){
      var obj = {
        status:0,
        userName:this.userName,
      }
      var todolist = this.storage.getItem("todolist")
      if(todolist){
        todolist.push(obj);
        this.storage.setItem("todolist",todolist);
      }else {
        var arr = [];
        arr.push(obj)
        this.storage.setItem("todolist",arr);
      }

      this.list.push(obj)
      this.userName = " "
    }
  }
  addData_1(){
    var obj = {
      status:0,
      userName:this.userName,
    }
    var todolist = this.storage.getItem("todolist");
    if(todolist){
      todolist.push(obj)
      this.storage.setItem("todolist",todolist);
    }else {
      var arr = [];
      arr.push(obj);
      this.storage.setItem("todolist",arr);
    }
    this.list.push(obj)
    this.userName = " "
  }
  delData(key){
      this.list.splice(key,1);/*删除数组的数据*/
      this.storage.setItem("todolist",this.list)
  }
  changeData(key){
    this.list[key].status?  this.list[key].status=0 : this.list[key].status=1
    this.storage.setItem("todolist",this.list)
  }
}
