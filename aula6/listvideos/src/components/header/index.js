import React, { Component } from 'react'

import logo from '../../assets/img/devaneios-code-logo.png'

import { HeaderContainer } from './styles'
import { LogoContainer } from './styles'
import { Busca } from './styles'

class Header extends Component {
    render(){
        return(
            <>
                <HeaderContainer>
                    <LogoContainer>
                        <img src={logo} alt="Logo Devaneios Code" />
                    </LogoContainer>
                    <Busca>
                        <input type="text" placeholder="Busca" />
                    </Busca>
                </HeaderContainer>
            </>
        )
    }
}


export default Header