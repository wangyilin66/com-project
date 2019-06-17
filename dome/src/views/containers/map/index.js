import React, { Component } from 'react';
import "./index.css";
import Header from '../../components/header/index.js'

export default class index extends Component {
    constructor(props){
        super(props);
        this.state = ({
            latime:20190611,
            laname:'盖伦',
            namelis:[
                {name:"危险人物1号",img:'https://b-ssl.duitang.com/uploads/item/201608/21/20160821230024_MyCYK.thumb.700_0.jpeg'},
                {name:"危险人物2号",img:'https://b-ssl.duitang.com/uploads/item/201608/21/20160821230024_MyCYK.thumb.700_0.jpeg'},
                {name:"危险人物3号",img:'https://b-ssl.duitang.com/uploads/item/201608/21/20160821230024_MyCYK.thumb.700_0.jpeg'},
                {name:"危险人物4号",img:'https://b-ssl.duitang.com/uploads/item/201608/21/20160821230024_MyCYK.thumb.700_0.jpeg'},
                {name:"危险人物5号",img:'https://b-ssl.duitang.com/uploads/item/201608/21/20160821230024_MyCYK.thumb.700_0.jpeg'}
        ],
        search:null,
        searchList:[],
        searchMessage:"没有查找到搜索内容",
        searchflag:false,
        idlist:[],
        taplist:[true,true,true,true,true],
        slidelist:[true,true,true,true,true],
        cardata:{"carlist": 
        [{number:"123457",unit:"华东野战军1",driver:"张学友",phone:"13866457712",lat: 39.90499582805964,lng: 116.37130733332599},
        {number:"177777",unit:"华东野战军2",driver:"王杰",phone:"13866457712",lat: 39.98895805956577,lng: 116.26577854156496},
        {number:"666666",unit:"华东野战军3",driver:"张三",phone:"13866457712",lat: 39.91737289576941,lng: 116.32083892822267},
        {number:"555555",unit:"华东野战军4",driver:"李四",phone:"13866457712",lat: 39.8101184420615,lng: 116.45919799804689},
        {number:"444444",unit:"华东野战军5",driver:"王二",phone:"13866457712",lat: 39.89867473290113,lng: 116.5312957763672},
        ]}
        });
    }
    inpchange = (v) => {
        this.setState({
            searchflag:true
        })
         let val = v.target.value;
         this.state.search = val;
         let newIdList = this.state.searchList;
         let idlists = this.state.idlist;
      
         if(val != ''){
            newIdList = idlists.filter((item) => {
               
                if(item.indexOf(val) > -1){
                    return item
                }
            });
             this.state.searchList = newIdList;
             if(newIdList.length > 0){           
                this.state.searchMessage = "";
                this.setState({
                    searchflag:true
                })
             }else{
             }
         }else{
            this.state.searchMessage = "没有查找到搜索内容";
             this.setState({
                 searchflag:false
             })
         }
    }

    tosearch = (val) => {
      this.refs.search.value = val
    }
     
    mouseDown = (ind,s) =>{
    let newS = s;
    newS[ind] = false;
    this.setState({
        s:newS
    })

    }

    mouseUp = (ind,s) => {
        let newS = s;
        newS[ind] = true;
        this.setState({
            s:newS
        })
       
    }
    componentDidMount(){
  
        window.sessionStorage.setItem("carlist",
        JSON.stringify(this.state.cardata));
        let sList = this.state.idlist;
        let carlist = this.state.cardata.carlist;
        carlist.map((v,i) => {
            if(sList.indexOf(v.number) == -1){
             sList.push(v.number);
             if(sList.indexOf(v.driver) == -1){
                sList.push(v.driver)
               }
            }
           
        });
        this.setState({
            idlist:sList
        });

        if(window.sessionStorage.getItem("mapflag") == true){
            window.sessionStorage.setItem("mapflag",false);
            this.props.history.go(0);
        }
       
        if(this.state.mapflag == false){
            this.setState({
                mapflag:true
            });
            this.props.history.go(0)
        }

    }


    render() {
        return (
            <div className="mapbox">
                 <Header></Header>
                 
               <div id="map">
                 <div className="tap">
                    <ul>
                        <li onMouseDown={() => {this.mouseDown(0,this.state.taplist)}}
                        onMouseUp={() => {this.mouseUp(0,this.state.taplist)}}>
                        {this.state.taplist[0] ? <img src={require('../../../common/images/common_icon_n_01.png')}></img> 
                        : <img src={require('../../../common/images/common_icon_s_01.png')}></img>}
                        <p>工作人员</p>
                        </li>
                        <li id="getcar" onMouseDown={() => {this.mouseDown(1,this.state.taplist)}}
                        onMouseUp={() => {this.mouseUp(1,this.state.taplist)}}>
                        {this.state.taplist[1] ? <img src={require('../../../common/images/common_icon_n_02.png')}></img> 
                        : <img src={require('../../../common/images/common_icon_s_02.png')}></img>}
                        <p>工作车辆</p>
                        </li>
                        <li onMouseDown={() => {this.mouseDown(2,this.state.taplist)}}
                        onMouseUp={() => {this.mouseUp(2,this.state.taplist)}}>
                        {this.state.taplist[2] ? <img src={require('../../../common/images/common_icon_n_03.png')}></img> 
                        : <img src={require('../../../common/images/common_icon_s_03.png')}></img>}
                        <p>工作设备</p>
                        </li>
                        <li onMouseDown={() => {this.mouseDown(3,this.state.taplist)}}
                        onMouseUp={() => {this.mouseUp(3,this.state.taplist)}}>
                        {this.state.taplist[3] ? <img src={require('../../../common/images/common_icon_n_04.png')}></img> 
                        : <img src={require('../../../common/images/common_icon_s_04.png')}></img>}
                        <p>轨迹查看</p>
                        </li>
                        <li onMouseDown={() => {this.mouseDown(4,this.state.taplist)}}
                        onMouseUp={() => {this.mouseUp(4,this.state.taplist)}}>
                        {this.state.taplist[4] ? <img src={require('../../../common/images/common_icon_n_05.png')}></img> 
                        : <img src={require('../../../common/images/common_icon_s_05.png')}></img>}
                        <p>即时通讯</p>
                        </li>

                    </ul>
                </div>
                <div className="slide">
                    <ul>
                    <li id="mapsmall" onMouseDown={() => {this.mouseDown(0,this.state.slidelist)}}
                        onMouseUp={() => {this.mouseUp(0,this.state.slidelist)}}>
                        {this.state.slidelist[0] ? <img src={require('../../../common/images/common_icon_n_06.png')}></img> 
                        : <img src={require('../../../common/images/common_icon_p_01.png')}></img>}
                    </li>
                    <li id="mapbig" onMouseDown={() => {this.mouseDown(1,this.state.slidelist)}}
                        onMouseUp={() => {this.mouseUp(1,this.state.slidelist)}}>
                        {this.state.slidelist[1] ? <img src={require('../../../common/images/common_icon_n_07.png')}></img> 
                        : <img src={require('../../../common/images/common_icon_p_02.png')}></img>}
                    </li>
                    <li id="circle" onMouseDown={() => {this.mouseDown(2,this.state.slidelist)}}
                        onMouseUp={() => {this.mouseUp(2,this.state.slidelist)}}>
                        {this.state.slidelist[2] ? <img src={require('../../../common/images/common_icon_n_08.png')}></img> 
                        : <img src={require('../../../common/images/common_icon_p_03.png')}></img>}
                    </li>
                    <li id="square" onMouseDown={() => {this.mouseDown(3,this.state.slidelist)}}
                        onMouseUp={() => {this.mouseUp(3,this.state.slidelist)}}>
                        {this.state.slidelist[3] ? <img src={require('../../../common/images/common_icon_n_09.png')}></img> 
                        : <img src={require('../../../common/images/common_icon_p_04.png')}></img>}
                    </li>
                    <li id="start" onMouseDown={() => {this.mouseDown(4,this.state.slidelist)}}
                        onMouseUp={() => {this.mouseUp(4,this.state.slidelist)}}>
                        {this.state.slidelist[4] ? <img src={require('../../../common/images/common_icon_n_10.png')}></img> 
                        : <img src={require('../../../common/images/common_icon_p_05.png')}></img>}
                    </li>
                    </ul>

                </div>
                <div className='popup'>
                <span className="popclose">x</span>
                 <ul>
                     <li>车辆编号:123456</li>
                     <li>定位:123456</li>
                     <li>驾驶员:123456</li>
                     <li>单位:123456</li>
                     <li>电话:123456</li>
                 </ul>
          
                 <img className="call" title="拨号" src={require('../../../common/images/tankuang_btn_01.png')}></img>
                 <img className="vid"  title="设备视频" src={require('../../../common/images/tankuang_btn_03.png')}></img>
                 <img className="vid2" title="发起视频" src={require('../../../common/images/tankuang_btn_04.png')}></img>
                </div>
            
                <div className="searchinp">
                        <input className="searchinput" type="text" ref="search" onChange={v => this.inpchange(v)}></input>
                        <div className="pic">
                            <img title="搜索" src={require('../../../common/images/208.png')}></img>
                        </div>
                        {this.state.searchflag ?  <div className="log">
                        <ul>
                            {this.state.searchList && this.state.searchList.map((v,i) => {
                                return <li key={i} onClick={this.tosearch.bind(this,v)}>{v}</li>
                            })}
                        </ul>
                        <p>{this.state.searchMessage}</p>
                     </div> : <div></div>}
                </div>
                
                 </div>

               
               <div className="show">
                    <p className="head">XX作战指挥方案</p>
                    <p className="latime">立案时间：{this.state.latime}</p>
                    <p className="laname">负责人：{this.state.laname}</p>
                    <div className="cont">
                        <ul>
                        {
                            this.state.namelis && this.state.namelis.map((v,i) =>{
                                return <li key={i}><img src={require('../../../common/images/u1068.png')}></img><span>{v.name}</span></li>
                            })
                        }
                    </ul>
                    </div>      
                </div>
            
            
               
            </div>
        )
    }
}
