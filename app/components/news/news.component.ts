import { Component, OnInit } from '@angular/core';

/*数据请求*/
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public list:any[];
  private headers= new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  requestData(){
    var That = this
    var url="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
    this.http.get(url).subscribe((res)=>{
      That.list = res.result;
    },(err)=>{
      console.log(err)
    })
  }

  requestJsonData() {
  var That = this;
// jsonp 必须得在url加回到  &callback=JSONP_CALLBACK
  var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK";
  this.http.jsonp(url).subscribe((res) => {
    That.list = res.result;
    console.log(That.list)
  })
}

  requestPostData(){


    let url="http://127.0.0.1:3000/dologin";

    this.http.post(url,
      JSON.stringify({"username":'zhangsan',"age":'20'}),
      {headers:this.headers}).subscribe(function(data){

      console.log(data);


    },function(error){

      console.log(error);
    })


  }
}



