import React, { Component } from 'react'
import Header from '../Header'
import { Carousel, Divider } from 'antd';
import {Route,Switch,Redirect,Link,NavLink} from 'react-router-dom'
import './Detail.css'
import {connect} from 'react-redux'
import actionCreator from './actionCreator'
console.log({...Carousel})
class Detail extends Component {
    constructor(props){
        super(props)
        this.state={
            id:Number(this.props.location.pathname.slice(8))
        }
    }
    componentDidMount(){
        this.props.getDetailData()
        console.log(this.state.id)
    }
    addCart=(list)=>{
        let cart =localStorage.getItem('cart')
        if(cart){
            cart=JSON.parse(cart)
            const isExist =cart.some(item=>{
                console.log(item,list[0].id)
                return item[0].id === list[0].id
            })
            if(isExist){
                console.log('商品已存在，+1')
                //如果存在，就把该商品num+1
                cart =cart.map((item)=>{
                    if(item[0].id === list[0].id) item.num++
                    return item
                })
            }
        else{
                //商品不存在
                console.log('商品不存在')
                cart.push({...list,num:1})
            }
            localStorage.setItem('cart',JSON.stringify(cart))
        }else{
            console.log('购物车没数据，存第一条')
            var arr =[]
            arr.push({...list,num:1})
            localStorage.setItem('cart', JSON.stringify(arr))
        }
    }
    render() {
        if(!this.props.detail.list) return ''
        let list = this.props.detail.list.data.object.list
        // console.log(this.props.location.pathname.slice(8))
        return (
            // <div></div>
            <div>
                {
                list.map((item)=>{
                return  <div key={item.id}>
                <Header />
                <Carousel >
                    <div>
                    <img src={item.img1} alt=""/>
                    </div>
                    <div>
                    <img src={item.img2} alt=""/>
                    </div>
                    <div>
                    <img src={item.img3} alt=""/>
                    </div>
                </Carousel>
   
                <div className="details-box">
                    <div className="pro-title">
                        <h3>{item.entitle}</h3>
                        <span>{item.citle}</span>
                    </div>
                </div>
                <p className="price-label">
                <span className="top-price">￥{item.price}.00</span>
                <span className="top-mkt-price" >{item.mkprice}</span>
                </p> 
                        </div>
                    })
                }
        
                <div className="pro-details-label">
                        <Link to="/list" className="leibie">新品&nbsp;›</Link>
                        <Link to="/list" className="leibie">生日&nbsp;›</Link>
                </div>
                <ul className="details-taste">
                    <li>
                        <img src="/img/micon-03.png" alt="酒"/>                      
                        酒
                    </li>
                    <li>   
                        <img src="/img/micon-04.png" alt="巧克力"/>                        
                        巧克力                    
                    </li>
                </ul>

                <div className="bottom-addcart-button">
                    <div className="joinCart">
                        <Link to="/cart" className="left-buy">立即购买</Link>
                        <span className="join-cart" onClick={this.addCart.bind(this,list)}>加入购物车</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect((state)=>state,actionCreator)(Detail)