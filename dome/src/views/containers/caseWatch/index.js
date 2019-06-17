import React, { Component } from 'react';
import './index.css'
import Tab from '../../components/tab/TabBox.js'
import Header from '../../components/header/index.js'
class Deploy extends Component {
  render() {
    return (
      <div className="deploy">
		<Header></Header>  	
		<Tab></Tab>
	  </div>
    );
  }
}

export default Deploy; 

