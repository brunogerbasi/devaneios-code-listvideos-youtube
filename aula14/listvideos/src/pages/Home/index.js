import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from '../../store'

import Header from '../../components/header'
import Lista from '../../components/lista'
import Video from '../../components/video'


import {Container} from './styles'
import './styles.css'

class Home extends Component{
    render(){
        return(
            <>
                <Provider store={store}>
                    <Header />
                    <Container>
                        <Lista />
                        <Video />
                    </Container>  
                </Provider>              
            </>
        )
    }
}

export default Home