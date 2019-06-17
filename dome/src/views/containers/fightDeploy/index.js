import React, { Component } from 'react';
import './index.css'
import Header from '../../components/header/index.js'
import FightDeployDialog from '../../components/dialog/FightDeployDialog/index.js'
import PersonnelEquip from '../../components/dialog/personnelEquip/index.js'
class FightDeploy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      FightDeployFlag: false,
      display_name: 'none' //此状态机为display的取值
    }
    // this.FightDeploy=this.FightDeploy.bind(this)
  }
  display_name =(val) => { //编辑按钮的单击事件，修改状态机display_name的取值
    if (this.state.display_name === 'none') {
        this.setState({
            display_name: 'block',
        })
    }
    else if (this.state.display_name === 'block') {
        this.setState({
            display_name: 'none',
        })

    }
}
  render() {
    return (
      <div className="deploy">
          <Header></Header>
          <div className="caseBox1">
                    <PersonnelEquip display_name={this.state.display_name} changeCloseDialog={this.display_name}></PersonnelEquip>
                    <ul className='caseWrap'>
                        <li>
                            {/* { this.props.val  } */}
                            <p className='caseNum'>信息</p>
                            <div className="caseDetail">
                                <ul className='caseInfoNav'>
                                  <li>案件信息</li>
                                  <li>人员结构</li>
                                  <li>设备资源</li>
                                </ul>
                                <div className="detail">
                                    <span className='caseName'>案件名称一</span>
                                    <div className="userInfo">
                                        <span>编号:&nbsp; 085434322;</span>
                                        &nbsp;&nbsp;
                                        <span>负责人:&nbsp; 王处长</span>
                                    </div>
                                    <p className='caseTime'>立案时间: 2019-09-21 &nbsp;&nbsp; 12:00:00</p>
                                    <p className='caseDescribe'>此处是案件描述此处是案件描述此处是案件描述此处是案件描述此处是案件描述 此处是案件描述此处是案件描述此处是案件描述此处是案件描</p>
                                </div>
                                <div className="actionObject">
                                    <div className="actionTop">
                                        <span>行动对象</span>
                                        <span>添加行动对象</span>
                                    </div>
                                    <div className="actionObjectInfo">
                                        <div className='actionObjectInfoWrap'>
                                            <dl>
                                                <dd>
                                                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3663082828,4038475488&fm=27&gp=0.jpg" alt=""/>
                                                </dd>
                                                <dt>
                                                    <span>姓名：宋江</span>
                                                    <span>性别：男</span>
                                                    <span>手机号：13011112222</span>
                                                    <span>身份证号：112123404057054</span>
                                                    <span>住所：北京市朝阳区</span>
                                                    <span>交通：步行</span>
                                                    <span>其他描述：身高180cm，体型健 硕，上衣白衬衫，下装黑裤子</span>
                                                </dt>
                                            </dl>
                                        </div>
                                        <div className='actionObjectInfoWrap'>
                                            <dl>
                                                <dd>
                                                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3663082828,4038475488&fm=27&gp=0.jpg" alt=""/>
                                                </dd>
                                                <dt>
                                                    <span>姓名：宋江</span>
                                                    <span>性别：男</span>
                                                    <span>手机号：13011112222</span>
                                                    <span>身份证号：112123404057054</span>
                                                    <span>住所：北京市朝阳区</span>
                                                    <span>交通：步行</span>
                                                    <span>其他描述：身高180cm，体型健 硕，上衣白衬衫，下装黑裤子</span>
                                                </dt>
                                            </dl>
                                        </div>
                                        <div className='actionObjectInfoWrap'>
                                            <dl>
                                                <dd>
                                                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3663082828,4038475488&fm=27&gp=0.jpg" alt=""/>
                                                </dd>
                                                <dt>
                                                    <span>姓名：宋江</span>
                                                    <span>性别：男</span>
                                                    <span>手机号：13011112222</span>
                                                    <span>身份证号：112123404057054</span>
                                                    <span>住所：北京市朝阳区</span>
                                                    <span>交通：步行</span>
                                                    <span>其他描述：身高180cm，体型健 硕，上衣白衬衫，下装黑裤子</span>
                                                </dt>
                                            </dl>
                                        </div>
                                        <div className='actionObjectInfoWrap'>
                                            <dl>
                                                <dd>
                                                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3663082828,4038475488&fm=27&gp=0.jpg" alt=""/>
                                                </dd>
                                                <dt>
                                                    <span>姓名：宋江</span>
                                                    <span>性别：男</span>
                                                    <span>手机号：13011112222</span>
                                                    <span>身份证号：112123404057054</span>
                                                    <span>住所：北京市朝阳区</span>
                                                    <span>交通：步行</span>
                                                    <span>其他描述：身高180cm，体型健 硕，上衣白衬衫，下装黑裤子</span>
                                                </dt>
                                            </dl>
                                        </div>

                                    </div>
                                </div>
                                <div className="fightPlayback">
                                    <p>作战回放</p>
                                </div>
                            </div>
                        </li>
                        <li>
                          <p className='caseNum'>作战部署</p>
                          <ul className='deployBtn'>
                            <li  onClick={this.display_name.bind(this)}>
                              作战部署
                              <FightDeployDialog display_name={this.state.display_name} changeCloseDialog={this.display_name}></FightDeployDialog>
                            </li>
                            <li onClick={this.display_name.bind(this)}>
                              人员配备
                            </li>
                            <li>确认添加</li>
                          </ul>
                        </li>
                        <li>
                          <p className='caseNum'>2019.05.20任务一</p>
                          <div className="taskInfo">
                            <div className="taskInfoTop">
                              <span>任务编号：保证XX活动的顺利开展</span>
                              <span>负责人：宋江</span>
                              <span>方法：方法一（跟踪）</span>
                              <span>创建人：吴用</span>
                              <span>相关行动对象：宋江</span>
                              <span>执行人：宋江</span>
                              <span>任务时间：2019-05-05 09:00-18;00</span>
                              <span>任务地点：北京市朝阳区</span>
                            </div>
                          </div>
                          <div className="taskBottom">
                            <p className='equipment'>人员设备:</p>
                            <ul className='teamNumber'>
                              <li>
                                <p>第一小队:</p>
                                <ol>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                </ol>
                              </li>
                              <li>
                                <p>第一小队:</p>
                                <ol>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                </ol>
                              </li>
                              <li>
                                <p>第一小队:</p>
                                <ol>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                  <li>A队员</li>
                                </ol>
                              </li>
                            </ul>
                          </div>
                        </li>
                    </ul>
                </div>
    </div>
    );
  }
}

export default FightDeploy; 

