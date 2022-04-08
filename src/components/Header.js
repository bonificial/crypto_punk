import React from 'react';
import './Header.css'
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from '../assets/header/search.png'
import themeSwitchAction from '../assets/header/theme-switch.png'

export default function Header(props) {
    return (
        <div className={'header'}>
            <div className="logoContainer">
                <img src={punkLogo} className={'punkLogo'}/>
            </div>
            <div className="searchBar">
                <div className="searchIconContainer">
                    <img src={searchIcon}/>
                </div>
                <input className={'searchInput'} type={'text'} placeholder={'Collection, Item or User....'}/>
            </div>
            <div className="headerItems">
                <p>Drops</p>
                <p>MarketPlace</p>
                <p>Create</p>
            </div>
            <div className="headerActions">
                <div className="themeSwitchContainer">
                    <img src={themeSwitchAction} className={'themeSwitchAction'}/>
                </div>
            </div>
            <div className="loginButton">
                Get In
            </div>
        </div>
    );
}
