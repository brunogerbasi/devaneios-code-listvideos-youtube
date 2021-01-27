import React, { Component } from 'react';

import Header from '../../components/header'
import Lista from '../../components/lista'
import Video from '../../components/video'

import './styles.css'

class Home extends Component{
    render(){
        return(
            <>
                <Header />
                <div className="container">
                    <Lista />
                    <Video />
                </div>
                
            </>
        )
    }
}

export default Home