import React, { Component } from 'react'
import {Route,Switch,Redirect,Link,NavLink} from 'react-router-dom'
import './Header.css'
export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="header-left-menu">
                        <img src="/img/top-icon.png" alt=""/>
                    </div>
                    <div className="address">
                        <img src="/img/address.png" alt="" />
                        <span>上海</span>
                    </div>
                    <NavLink to="/">
                    <div className="header-center">
                        <img src="/img/logo.png" alt=""/>
                    </div>
                    </NavLink>
                    <div className="header-message">
                        <img src="/img/header_message.png" alt=""/>
                    </div>
                    <NavLink to="/cart">
                    <div className="header-cart">
                    <img src="/img/cart.png" alt=""/>
                    <span>2</span>
                    </div>
                    </NavLink>
                </div>
            </div>
        )
    }
}
