import React, { Component } from 'react'

import logo from '../../assets/img/devaneios-code-logo.png'

import { HeaderContainer } from './styles'
import { LogoContainer } from './styles'
import { Busca } from './styles'

class Header extends Component {

    buscaInput = e => {
        if(e.keyCode === 13){
            const valor = e.target.value
            
            console.log(valor)
        }
        
    }
    render(){
        return(
            <>
                <HeaderContainer>
                    <LogoContainer>
                        <img src={logo} alt="Logo Devaneios Code" />
                    </LogoContainer>
                    <Busca>
                        <input type="text" placeholder="Busca"  
                        onKeyDown={(e) => this.buscaInput(e)}
                        />
                    </Busca>
                </HeaderContainer>
            </>
        )
    }
}


export default Header