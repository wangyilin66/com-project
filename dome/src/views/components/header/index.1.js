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
       </div> 
    )
  }
}
