import React, { Component } from 'react'
import Header from '../Header'
import './List.css'
import {Route,Switch,Redirect,Link,NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import actionCreator from './actionCreator'
import { Tabs } from 'antd';
const { TabPane } = Tabs;
 class List extends Component {
    toDetail=(id)=>{
        this.props.history.push('/detail/'+id)
    }
    componentDidMount(){
        this.props.getListData()
    }
    render() {
        console.log(this.props)
        return (
            <div className="list-main">
                <Header />
                    {/* <div className="products-list-nav-box">
                        <div className="products-list-nav">
                            <ul className="list-nav">
                                <li>      
                                    <Link to="/list:1" className="nav-name"> 蛋糕</Link>
                                </li>
                                <li>       
                                    <Link to="/list:2" className="nav-name">冰淇淋</Link>
                                </li>
                                <li>        
                                    <Link to="/list:3" className="nav-name">咖啡下午茶</Link>
                                </li>
                                <li>                                
                                    <Link to="/list:4" className="nav-name"> 面包</Link>
                                </li>
                                <li>                                
                                    <Link to="/list:5" className="nav-name">常温蛋糕</Link>
                                </li>
                                <li>                                   
                                    <Link to="/list:6" className="nav-name">设计师礼品</Link>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="蛋糕" key="1">
                        <div className="list-box">
                        <ul>
                            {
                                this.props.list.list && this.props.list.list.data.body.list.map((item)=>{
                                    return <li key={item.id} onClick={this.toDetail.bind(this,item.id)}>
                                            <div>
                                    <div className="list-pro-content">
                                        <div className="list-pro-a">
                                            <div className="list-pro-img">
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <h3>{item.entitle}<span>{item.ctitle}</span></h3>
                                            <span className="price">¥{item.price}/{item.weight}g(2.0磅)</span>
                                        </div>
                                        <span className="list-cart">
                                            <img src="/img/list-cart.png" alt=""/>
                                        </span>
                                    </div>
                                </div>
                                    </li>
                                })
                            }                           
                        </ul>
                    </div>
                        </TabPane>
                        <TabPane tab="冰淇淋" key="2">
                        <div className="list-box">
                        <ul>
                            {
                                this.props.list.list && this.props.list.list.data.body.list.map((item)=>{
                                    return <li key={item.id} onClick={this.toDetail.bind(this,item.id)}>
                                            <div>
                                    <div className="list-pro-content">
                                        <Link to="/detail" className="list-pro-a">
                                            <div className="list-pro-img">
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <h3>{item.entitle}<span>{item.ctitle}</span></h3>
                                            <span className="price">¥{item.price}/{item.weight}g(2.0磅)</span>
                                        </Link>
                                        <span className="list-cart" >
                                            <img src="/img/list-cart.png" alt=""/>
                                        </span>
                                    </div>
                                </div>
                                    </li>
                                })
                            }                           
                        </ul>
                    </div>
                        </TabPane>
                        <TabPane tab="咖啡下午茶" key="3">
                        <div className="list-box">
                        <ul>
                            {
                                this.props.list.list && this.props.list.list.data.body.list.map((item)=>{
                                    return <li key={item.id} onClick={this.toDetail.bind(this,item.id)}>
                                            <div>
                                    <div className="list-pro-content">
                                        <Link to="/detail" className="list-pro-a">
                                            <div className="list-pro-img">
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <h3>{item.entitle}<span>{item.ctitle}</span></h3>
                                            <span className="price">¥{item.price}/{item.weight}g(2.0磅)</span>
                                        </Link>
                                        <span className="list-cart">
                                            <img src="/img/list-cart.png" alt=""/>
                                        </span>
                                    </div>
                                </div>
                                    </li>
                                })
                            }                           
                        </ul>
                    </div>
                        </TabPane>
                    </Tabs>   
            </div>
        )
    }
}
export default connect((state)=>state,actionCreator)(List)