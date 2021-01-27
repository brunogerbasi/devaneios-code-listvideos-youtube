import React, { Component } from 'react'

import logo from '../../assets/img/devaneios-code-logo.png'

class Header extends Component {
    render(){
        return(
            <>
                <header>
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div className="busca">
                        <input type="text" placeholder="Busca" />
                    </div>
                </header>
            </>
        )
    }
}


export default Header