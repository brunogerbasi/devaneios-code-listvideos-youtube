import React, { Component } from 'react'
import { connect }  from 'react-redux'
import { buscaVideo } from '../../store/actions/searchAC'

import logo from '../../assets/img/devaneios-code-logo.png'

import { HeaderContainer } from './styles'
import { LogoContainer } from './styles'
import { Busca } from './styles'

class Header extends Component {

    constructor(props) {
        super(props)

        this.props.buscaVideo('Devaneios code')
    }

    buscaInput = e => {
        if(e.keyCode === 13){
            const valor = e.target.value            
            console.log(valor)
            this.props.buscaVideo(valor)
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

const mapDispatchToProps = (dispatch ) => {
    return{
        buscaVideo: ( params ) => dispatch (
            buscaVideo(params) 
        )
    }
}


export default connect(null, mapDispatchToProps) (Header)