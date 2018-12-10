import { Component, OnInit,ViewChild } from '@angular/core';
import {HttpClient,HttpHeaders,HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-transfer01',
  templateUrl: './transfer01.component.html',
  styleUrls: ['./transfer01.component.scss']
})
export class Transfer01Component implements OnInit {
  public msg :any;
  public list:any[];
  @ViewChild ('toChild') childData
  constructor(private http:HttpClient) {
    this.msg = "这是transfer01组件的msg(父组件)";
  }

  ngOnInit() {
     this.reqData()
  }
  run(){
    alert("这是transfer01的run方法")
  }
  getDataFormTransfer02(childData){
    alert(childData+"transfer01")
  }
  reqData(){
    var that = this
    var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1"
    this.http.get(url).subscribe((data)=>{
      that.list = data.result

    });
  }
  runParent(msg:string){
    alert("执行父组件的方法通过@Output")
    console.log(msg)
  }
  getChildData(){
    this.childData.childRun()
  }
}
