import React from 'react'
import Header from '../../components/header/index.1.js'
import ReactEcharts from 'echarts-for-react';
import './Admin.css'
import { Progress } from 'antd';

class Admin extends React.Component{
    
    componentWillMount(){
        console.log(this)
    }
      
    getOption(){
        return {
            title: {
                text: '近两周完成案件与在办案件折线图',
                textStyle:{
                color: '#fff'
                 },
                left:'center'
            },
            grid:{
                borderColor: 'gray',
                show:true,
                borderColor:"gray"
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
            //     data:[{'完成案件','在办案件'
            
            // ],
            data:[
                {
                name:'完成案件',
                icon:'roundRect',
               },
               {
                icon:'roundRect',
                name:'在办案件'
               }
              ],
                itemWidth:10,
                itemHeight:10,
                align:'right',
                padding: 30,
                textStyle:{
                    fontSize:15,
                    color:'#fff',
                },
               
            },
           
            xAxis:  {
                show:true,
                type: 'category',
                boundaryGap: false,
                data: ['07','08','09','10','11','12','13'],
              
                splitLine:{show: true},//网格线
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: 'gray',//左边线的颜色
                        width:'1'//坐标线的宽度
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: 'gray',//坐标值得具体的颜色
                    }
                }

            },
            yAxis: {
                type: 'value',
                splitLine:{show: true},//网格线
                axisLabel: {
                    lineStyle: {
                        type: 'solid',
                        color:'gray',
                        width:'1'
                    },
                    textStyle: {
                        color: 'gray'
                    }
                },
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color:'gray',
                        width:'1'
                    }
                },
            },
            
            series: [
                {
                    name:'完成案件',
                    type:'line',
                    data:[11, 11, 15, 13, 12, 13, 10],
                    color:['#f0f']
                },
                {
                    name:'在办案件',
                    type:'line',
                    data:[1, -2, 2, 5, 3, 2, 0],
                    color:['green']
                    
                } 
            ]
        }
    }
       
     render(){  
        return(
            <div class="main">
                <div class="main_top">
                 <Header></Header>
                </div>
                <div class="main_bot">
                    <div class="main_bot_left">
                        <div class="main_bot_left_top">
                            <div  class="title">登录人员信息</div>
                            <ul  class="xinxi_one">
                                <li><span>姓名：</span><span>张三</span></li>
                                <li><span>性别：</span><span>男</span></li>
                                <li><span>职位：</span><span>**省##市##支队##队员</span></li>
                                <li><span>登陆地点：</span><span>北京市</span></li>
                            </ul>
                        </div>
                        <div class="main_bot_left_middle">
                            <div  class="title">最新操作记录</div>
                            <ul  class="xinxi_two">
                                <li><span>2019_05_18 15:30</span><span>进入作战部署模块</span></li>
                                <li><span>2019_05_18 15:30</span><span>进入作战部署模块</span></li>
                                <li><span>2019_05_18 15:30</span><span>进入作战部署模块</span></li>
                                <li><span>2019_05_18 15:30</span><span>进入作战部署模块</span></li>
                            </ul>
                        </div>
                        <div class="main_bot_left_bottom">
                            <ul  class="xinxi_three">
                                <li class="xinxi_three_top one">
                                    <span id="xinxi_three_top_title">摄像头</span>
                                    <ul  class="xinxi_three_erji">
                                        <li>总计:<span>300</span></li>
                                        <li>正常:<span>180</span></li>
                                    </ul>
                                </li>
                                <li class="one"><span>视频服务</span><span>正常</span></li>
                                <li class="one"> <span>音频服务</span><span>异常</span></li>
                                <li class="one"><span>地图服务</span><span>正常</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="main_bot_middle">
                     
                        {/* <Lunbo></Lunbo>
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"> <li><img src={protrait} alt=""/></li></div>
                                <div class="swiper-slide"><li><img src={protrait1} alt=""/></li></div>
                                <div class="swiper-slide"><li><img src={protrait2} alt=""/></li></div>
                                <div class="swiper-slide"> <li><img src={protrait3} alt=""/></li></div>
                                <div class="swiper-slide"><li><img src={protrait4} alt=""/></li></div>
                                <div class="swiper-slide"><li><img src={protrait5} alt=""/></li></div>
                                <div class="swiper-slide"> <li><img src={protrait6} alt=""/></li></div>
                               
                            </div>
                        
                            <div class="swiper-pagination"></div>

                        
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>

                        
                            <div class="swiper-scrollbar">
                    </div>  */}
                  
              {/* </div>
              <div  id="box"> */}
               {/* <div class="slide">
                    <ul>
                        <li><a href="#"><img src={protrait} alt=""/></a></li>
                        <li><a href="#"><img src={protrait1} alt=""/></a></li>
                        <li><a href="#"><img src={protrait2} alt=""/></a></li>
                        <li><a href="#"><img src={protrait3} alt=""/></a></li>
                        <li><a href="#"><img src={protrait4} alt=""/></a></li>
                        <li><a href="#"><img src={protrait5} alt=""/></a></li>
                        <li><a href="#"><img src={protrait6} alt=""/></a></li>       
                    </ul>
                    <div class="arraw">
                        <a href="javascript:;" class="next"></a>
                        <a href="javascript:;" class='prev'></a>
                    </div>
              </div> */}
          {/* </div>  */}
                    </div>
                    <div class="main_bot_right">
                        <div class="main_bot_right_top">
                            <div class="title">案件信息</div>
                            <ul>
                                <li class="first"><span>待审批案件：</span><span>200件</span></li>
                                <li><span>在办案件：</span><span>200件</span></li>
                                <li><span>已完成案件：</span><span>200件</span></li>
                            </ul>
                            <div id="bot_echart">
                                <ReactEcharts style={{width:'100%', height:'250px',color:'#fff'}} option={this.getOption()} />
                            </div>
                        </div>
                          <div class="main_bot_right_bottom">
                                <div class="title">资源信息</div>
                                <ul class="top">
                                    <li><span>总人数：</span><span>15000人</span></li>
                                    <li><span>总设备数：</span><span>2000件</span></li>    
                                </ul>

                                <ul class="middle">
                                    <li>A类设备数: <span>500件</span></li>
                                    <li>A类设备数: <span>500件</span></li>
                                    <li>A类设备数: <span>500件</span></li>
                                    <li>A类设备数: <span>500件</span></li>
                                </ul>

                                <div class="bottom">
                                    <dl style={{ width: 300 ,textAlign:'center'}}>
                                        <dt>A类设备</dt>
                                        <dd><Progress percent={40} size="small" strokeColor=""/></dd>
                                        <dt>B类设备</dt>
                                        <dd><Progress percent={90} size="small" strokeColor="pink"/></dd>
                                        <dt>C类设备</dt>
                                        <dd><Progress percent={60} size="small" strokeColor="green"/></dd>
                                        <dt>d类设备</dt>
                                        <dd><Progress percent={10} size="small" strokeColor="red"/></dd>
                                    </dl>
                                </div>
                            </div>
                       </div>
                </div>
            </div>
                
                
        )
    }
}
export default Admin