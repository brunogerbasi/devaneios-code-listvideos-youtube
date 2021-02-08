import React, {Component} from 'react';

import {connect} from 'react-redux'

import ReactPlayer from 'react-player'

import { VideoContainer } from './styles'

class Video extends Component{
    render(){
        return(            
            <VideoContainer>

                {
                    !this.props.video && ( 

                        <h4>Selecione um video para exibir</h4>
                    )
                }      
               
                    {
                        this.props.video && (   
                                                      
                            <ReactPlayer 
                                url={'https://www.youtube.com/watch?v='+ this.props.video.id.videoId} 
                                width='100%'
                                height='100%'
                            /> 
                        )
                    }
                      
            </VideoContainer>           
        )
    } 
}

const mapStateToProps = (state) => { 
    return{
        video: state.startVideo.video
    }
}


export default connect(mapStateToProps, null) (Video) 