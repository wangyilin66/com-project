import React from 'react'

import './Login.css';

class Login extends React.Component{
    
    componentWillMount(){
        console.log(this)
    }
    cli =() => {
   this.props.history.push('/map')
    }
     render(){  

        return(
            <div className="main">
                <div className="main_title">用户登录</div>
                <form className="main_card">
                   <input  placeholder="用户名" className="main_card_name"/>
                   <input placeholder="密码" className="main_card_password"/>
                   <div className="main_card_block">
                        <input placeholder="验证码" className="main_card_checkout"/>
                        <div className="main_card_right">abcd</div>
                   </div>
                   <div className="main_card_btn">
                        <button onClick={this.cli}>登录</button>
                   </div>
                </form>
                
            </div>
        )
    }
}
export default Login