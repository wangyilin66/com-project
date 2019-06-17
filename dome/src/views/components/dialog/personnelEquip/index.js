import React, { Component } from 'react';
import './index.css'
class personnelEquip extends Component {
  
    // 取消按钮
  closeDialog= () =>{
    this.props.changeCloseDialog()
  }

    //   确认按钮
    cancle=()=>{
    this.props.changeCloseDialog()
    }
  render() {
    return (
      <div className="personnelEquip" style={{display: this.props.display_name,zIndex:999999}}>
          <header>
              <span>队伍配备</span>
          </header>
          <section>
              <label htmlFor="">小队名称: <input type="text"/></label>
              <ul>
                  <li>第一小队</li>
                  <li>第二小队</li>
                  <li>第三小队</li>
              </ul>
          </section>
          <footer>
              <span onClick={this.closeDialog}>取消</span>
              <span onClick={this.cancle}>确认</span>
          </footer>
      </div>
    );
  }
}

export default personnelEquip; 

