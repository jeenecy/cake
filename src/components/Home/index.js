import React, { Component } from 'react'
import Header from '../Header'
import {Route,Switch,Redirect,Link,NavLink} from 'react-router-dom'
import { Carousel } from 'antd';
import {connect} from 'react-redux'
import actionCreator from './actionCreator'
import './home.css'
 class Home extends Component {
    componentDidMount(){
        this.props.getHomeData()
        // console.log(this.props)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <Header />
                {/* 轮播区域 */}
                <Carousel autoplay>
                <div>
                <img src="/img/banner1.jpg" alt=""/>
                </div>
                <div>
                <img src="/img/banner2.jpg" alt=""/>
                </div>
                <div>
                <img src="/img/banner3.jpg" alt=""/>
                </div>
                <div>
                <img src="/img/banner4.jpg" alt=""/>
                </div>
            </Carousel>,
                <div className="new-home-content">
                <ul className="rights-box">
                    <li><i className="new-home-icon"></i>新客满198元赠冰淇淋</li>
                    <li><i className="new-home-icon"></i>满100包邮 </li>
                    <li><i className="new-home-icon"></i>全程冷链配送</li>
                </ul>
                <ul className="home-menu-box">
                    <li>
                        <img src="/img/nav1.png" alt=""/>
                        蛋糕
                    </li>
                    <li>
                        <img src="/img/nav2.png" alt=""/>
                        面包
                    </li>
                    <li>
                        <img src="/img/nav3.png" alt=""/>
                        下午茶
                    </li>
                    <li>
                        <img src="/img/nav4.png" alt=""/>
                        企业专区
                    </li>
                </ul>
                {/* 商品渲染区域 */}
                    <div className="mould-goods">
                        <div className="mould-goods-content">
                            <h3 className="title-goods">
                                <span>新品</span>
                                <NavLink to="/list" className="more">
                                    更多
                                    <i className="new-home-more"></i>
                                </NavLink>
                            </h3>
                            <ul>
                                {
                                    this.props.home.list &&this.props.home.list.data.body.list.map((item)=>{
                                        return <li key={item.id}>
                                            <NavLink to="/detail" >
                                                <img src={item.img} alt=""/>
                                            </NavLink>
                                            <div className="bottom-price-cart">
                                            <NavLink to="/detail" >
                                                <h4>
                                                    <span className="title">{item.title}</span>
                                                    <span className="price">{item.price}</span>
                                                    <span>元/454g(1.0磅)</span>
                                                </h4>    
                                                    <p>{item.intr}</p>
                                            </NavLink>
                                            <button>
                                                <i className="new-home-icon"></i>
                                            </button>    
                                            </div>
                                        </li>
                                    })
                                }
                                {/* <li>
                                <NavLink to="/detail" >
                                    <img src="/img/ceshi1.jpg" alt=""/>
                                </NavLink>
                                <div className="bottom-price-cart">
                                <NavLink to="/detail" >
                                    <h4>
                                        <span className="title">米道</span>
                                        <span className="price">298</span>
                                        <span>元/454g(1.0磅)</span>
                                    </h4>    
                                        <p>天真、天然，是做这款蛋糕唯一的出发点</p>
                                </NavLink>
                                    <button>
                                        <i className="new-home-icon"></i>
                                    </button>    
                                     </div>
                                </li>     */}
                                {/* dierge */}
                                {/* <li>
                                <NavLink to="/detail" >
                                    <img src="/img/ceshi1.jpg" alt=""/>
                                </NavLink>
                                <div className="bottom-price-cart">
                                <NavLink to="/detail" >
                                    <h4>
                                        <span className="title">米道</span>
                                        <span className="price">298</span>
                                        <span>元/454g(1.0磅)</span>
                                    </h4>    
                                        <p>天真、天然，是做这款蛋糕唯一的出发点</p>
                                </NavLink>
                                    <button>
                                        <i className="new-home-icon"></i>
                                    </button>    
                                     </div>
                                </li>     */}
                            </ul>    
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default connect((state)=>state,actionCreator)(Home)