import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*引入双向数据绑定*/
import { FormsModule } from '@angular/forms';

/*引入服务*/
import {StorageService} from './service/storage.service'

/*引入数据请求*/
import { HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Study01Component } from './components/study01/study01.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NewsComponent } from './components/news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Study01Component,
    TodoListComponent,
    NewsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*引入双向数据绑定*/
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
