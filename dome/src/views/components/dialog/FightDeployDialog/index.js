import React, { Component } from 'react';
import './index.css'
class FightDeployDialog extends Component {
  
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
      <div className="FightDeployDialog" style={{display: this.props.display_name }}>
          <header>
              <span>基础信息</span>
          </header>
          <section>
             <ul>
                 <li>
                     <span>任务编号:</span>
                     <input type="text"/>
                 </li>
                 <li>
                     <span>任务编号:</span>
                     <input type="text"/>
                 </li>
                 <li>
                     <span>任号:</span>
                     <input type="text"/>
                 </li>
                 <li>
                     <span>任务编号:</span>
                     <input type="text"/>
                 </li>
                 <li>
                     <span>任务编号:</span>
                     <input type="text"/>
                 </li>
                 <li>
                     <span>任务编号:</span>
                     <input type="text"/>
                 </li>
                 <li>
                     <span>任务编号:</span>
                     <input type="text"/>
                 </li>
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

export default FightDeployDialog; 

