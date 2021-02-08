import React from 'react'

import { LoaderContainer } from './styles'

import spin from '../../assets/img/spin.gif'


function Loader (){
    return(
        <LoaderContainer>
            <img src={spin} alt="loader" />
        </LoaderContainer>
    )
}

export default Loader