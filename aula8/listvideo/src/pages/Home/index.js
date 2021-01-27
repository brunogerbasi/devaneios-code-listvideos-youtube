import React, { Component } from 'react';

import Header from '../../components/header'
import Lista from '../../components/lista'
import Video from '../../components/video'


import {Container} from './styles'
import './styles.css'

class Home extends Component{
    render(){
        return(
            <>
                <Header />
                <Container>
                    <Lista />
                    <Video />
                </Container>                
            </>
        )
    }
}

export default Home