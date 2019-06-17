import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css'
export default class heade extends Component {
  render() {
    return (
       <div>
        <div className="header">
              <div className="imgBox">
                  <span className='word'>作战指挥平台</span>
                  <ul className='timer'>
                      <li>12:23:23</li>
                      <li>2019-05-11</li>
                      <li>星期一</li>
                  </ul>
              </div>
          </div>  
          <ul className='nav'>
            <li><Link className="link" to={{pathname:'/admin'}}>首页</Link></li>
            <li><Link  className="link" to={{pathname:'/FightDeploy'}}>作战部署</Link></li>
            <li><Link className="link" to={{pathname:'/map'}}>作战指挥</Link></li>
            <li>集中监控</li>
            <li>数据研判</li>
            <li><Link  className="link" to={{pathname:'/casewatch'}}>案件归档</Link></li>
            <li>工作交流</li>
            <li>系统管理</li>   
          </ul>
       </div> 
    )
  }
}
