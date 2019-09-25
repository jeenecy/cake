import React, { Component } from 'react'
import Header from '../Header'
import './Cart.css'
import {connect} from 'react-redux'
// import actionCreator from './actionCreator'
export default class Cart extends Component {
    constructor(){
        super()
        this.state={
            List:[],
            List1:[]
        }
    }
    componentDidMount(){
        let cart =localStorage.getItem('cart')
        cart =JSON.parse(cart)
        console.log(cart)
        console.log(typeof cart)
        var arr =[]
        var arr1=[]
        cart.forEach((item,index)=>{
            console.log(item,index)
            arr.push(item[0])
            arr1.push(item.num)
        })
        console.log(arr)
        console.log(arr1)
        this.setState({
            List:arr,
            List1:arr1
        })
    }
    render() {
        
        return (
            <div>
                <Header />
                <div className="cart-container">
                <p className="cart-top-tip">· 满100元免配送服务费 ·</p>
                {/* 购物车商品渲染部分 */}
                <ul className="cart-pro-list">
                    {
                        this.state.List &&this.state.List.map((item)=>{
                            return  <li className="cart-object-goods-item" key={item.id}>
                            <div className="cart-pro-box">
                                <img src={item.img1} alt="" />
                                <div className="cart-pro-title">
                                    <div>
                                        <h2>
                                            <span>{item.entitle}</span>
                                            <span>{item.ctitle}</span>
                                        </h2>
                                    </div>
                                    <span className="cart-select-pound">                                  
                                    规格：{item.weight}g(1.0磅)
                                    <i></i>
                                    </span>
                                    <span className="cart-price">
                                        ￥{item.price}.00
                                    </span>
                                </div>
                            </div>

                            <div className="cart-pro-number">
                                <span>-</span><span>
                                    {
                                        this.state.List1 &&this.state.List1.map((item1,index)=>{
                                            return <span key={index}>{item1}</span>
                                        })
                                    }
                                    </span><span>+</span>
                            </div>
    
                            <p className="laid-count">每份含免费餐具5套</p>

                            <p className="birthday-brand">+ 添加生日牌</p>
                        </li> 
                        })
                    }
                   
                      
                    
                    {/* <li className="cart-object-goods-item">
                        <div className="cart-pro-box">
                            <img src="img/c1.jpg" alt="" />
                            <div className="cart-pro-title">
                                <div>
                                    <h2>
                                        <span>Rice Cake</span>
                                        <span>米道</span>
                                    </h2>
                                </div>
                                <span className="cart-select-pound">                                  
                                规格：454g(1.0磅)
                                <i></i>
                                </span>
                                <span className="cart-price">
                                    ￥298.00
                                </span>
                            </div>
                        </div>

                         <div className="cart-pro-number">
                             <span>-</span><span>1</span><span>+</span>
                         </div>
 
                         <p className="laid-count">每份含免费餐具5套</p>

                         <p className="birthday-brand">+ 添加生日牌</p>
                    </li> */}
                    {/* 第二份 */}
                    
                </ul>
                </div>
            </div>
        )
    }
}
// export default connect((state)=>state,actionCreator)(Cart)
