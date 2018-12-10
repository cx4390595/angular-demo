//引入Input
import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-transfer02',
  templateUrl: './transfer02.component.html',
  styleUrls: ['./transfer02.component.scss']
})
export class Transfer02Component implements OnInit {
  @Input() msg: string;
  /*通过Input 接收父组件传过来的msg*/
  @Input() run
  /*通过Input 接收父组件传过来的run */
  @Input() getDataFormTransfer02
  /*通过Input 接收父组件传过来的run */

  /*子传父*/
  /*用 EventEmitter 和 output 装饰器配合使用 <string>指定类型变量*/
  @Output() private toparent = new EventEmitter<string>();


  public tansfer02Msg = '这是子组件的数据'

  constructor() {

  }

  ngOnInit() {
  }

  sendTransfer01() {
    this.getDataFormTransfer02(this.tansfer02Msg)
  }

  /*子传父*/
  requestData() {
    this.toparent.emit("这是来自子组件的值")
  }
  childRun(){
    alert("这是子组件的方法")
  }
}
