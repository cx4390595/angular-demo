##初始化
###安装脚手架

```npm install -g @angular/cli```
###运行
```ng serve --open```

###生成组件components
```ng g component 目录/子目录```


###生成服务service
```ng g service 目录/子目录```

1. app.module.ts

	import {服务} from './service/storage.service'

		@NgModule({
			declarations: [
	    		AppComponent,
		  	],
		  	imports: [
	    		BrowserModule,
	   		 	AppRoutingModule,
		  ],
		  	providers: [服务],
		  	bootstrap: []
			})   	


2. 在xxx.component.ts
	
	import {服务} from "../../service/storage.service";
	
		@Component({
		  selector: 'app-todo-list',
		  templateUrl: './todo-list.component.html',
		  styleUrls: ['./todo-list.component.scss']
		})
		export class TodoListComponent implements OnInit {

		// public storage=new StorageService();   /*可以引入和使用服务  -- 官方不推荐这样的方法*/

		  constructor(private 服务名:服务) {

		    console.log(this.storage)//调用服务
		  }
		
		  ngOnInit() {
			这里相当于vue的mounted	
		  }		

###在app.module.ts中引入组件
```import { 组件名 } from './目录/子目录'```

	@NgModule({
	  declarations: [
	    AppComponent,
	 	组件名，
	  ],
	  imports: [
	    BrowserModule,
	    AppRoutingModule
	  ],
	  providers: [],
	  bootstrap: [AppComponent]
	})

##使用组件
1. 打开 /生成组件文件夹/xxxx.component.ts里面查看组件使用名 默认是app-xxxx
2. 在需要引入组件的地方放上标签<app-xxxx></app-xxxx>

##组件xxxx.component.ts 定义属性 值 方法等
	import { Component, OnInit } from '@angular/core';
	
	@Component({
	  selector: 'app-new',
	  templateUrl: './new.component.html',
	  styleUrls: ['./new.component.scss']
	})
	export class NewComponent implements OnInit {


	tiltle='你好angular4.x';  /*属性*/
	  msg:any;  /*另一种定义属性的方法*/
	  msg1:string='这是一个string类型的msg';
	
	
	 //定义属性我们还可以给他加修饰符
	 
	
	  public username="张三";   /*username可以是任意类型*/
	  public student:string='这是一个学生的属性';
	
	
	/*声明属性的几种方式*/
	/*
	  public 共有  *（默认）           可以在这个类里面使用、也可以在类外面使用
	  protected  保护类型        他只有在当前类和它的子类里面可以访问
	  private   私有                  只有在当前类才可以访问这个属性
		*/
	
	
	//属性
	  public id='123555'; //<div id="{{id}}" >这事一个div调试工具 看一下我的属性</div>
	  public h="";
	
	//数据循环
	  public list=[];
	  public list2:any[];
	  public list3:any[];  
	  public list4:any[];  

	//对象
	  public obj={
	    name:'张三'
	  }
	
	  constructor() { 
    this.msg='这是msg，另一种定义属性的方法'; //<div [title]="msg" >鼠标瞄上去看一下</div>

    //去服务器请求数据  新闻
    this.h="<h2>这是新闻的数据</h2>"; //<span [innerHTML]="h"></span>

    this.list=['1111','2222','3333'];

    this.list2=['数学','语文','外语'];

    this.list3=[
      {'title':'1111111111111111111'},
      {'title':'22222222222222222'},
      {'title':'3333333333333333333'}
    ];

    this.list4=[

      {
        'catename':"宝马",
        "list":[

          {'title':'宝马x1'},
          {'title':'宝马x3'},
          {'title':'宝马x2'},
          {'title':'宝马x4'},
        ]
     } ,{
        'catename':"奥迪",

        "list":[

          {'title':'奥迪q1'},
          {'title':'奥迪q2'},
          {'title':'奥迪q3'},
          {'title':'奥迪q4'},
        ]
    
     },
    ]
		}
	
	  ngOnInit() {

	  }
	
	}


###循环数据获取索引值 *ngFor
	<ul>
	  <li *ngFor="let item of list2; let key=index">
	
	    {{item}}---{{key}}
	  </li>
	</ul>

###条件判断语句 *ngIf
	<div *ngIf='flag'>flag=true的时候显示</div>	

###点击事件(click)

	<div (click)="fn()"></div>	

###按键抬起事件(keyup) 并传入事件对象$event

	<div (keyup)="fn($event)"></div>	


###双向数据绑定 1.[]绑定属性 2()绑定事件  [(ngModel)]
1. 在app.module.ts中

	- import { FormsModule } from '@angular/forms'; 
		
			@NgModule({
			  declarations: [
			  ],
			  imports: [
			    FormsModule,
			  ],
			})

2. [(ngModel)]="obj" 

	<input [(ngModel)]="inputValue>
	
	{{inputValue}}

###get post jsonp请求
1.在app.module.ts中引入两个模块
```import { HttpClientModule,HttpClientJsonpModule} from ```
		
	@NgModule({
	  declarations: [
	    AppComponent,
	
	  ],
	  imports: [
	    HttpClientModule,
	    HttpClientJsonpModule,
	  ],
	  providers: [],
	  bootstrap: [AppComponent]
	})
	export class AppModule { }

2.在组件里面使用 get post jsonp

- 引入模块------```import { HttpClient,HttpHeaders} from '@angular/common/http';```
- post设置请求头------ ```private headers= new HttpHeaders({'Content-Type': 'application/json'})```
- 注入模块get post jsonp都使用它-------```constructor(**private http : HttpClient**) { }```
	
## 1.GET请求
	
	  requestGetData(){

	    var url="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";

	    this.http.get(url).subscribe((res)=>{
	      console.log(res)
	    },(err)=>{
	      console.log(err)
	    })
	  }

## 2.JSONP请求

	  requestJsonData() {
	  var That = this;
	// jsonp 必须得在url加回到  &callback=JSONP_CALLBACK

	  var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK";

	  this.http.jsonp(url).subscribe((res) => {
	    That.list = res.result;
	    console.log(That.list)
	  })
	}

## 3.POST请求

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