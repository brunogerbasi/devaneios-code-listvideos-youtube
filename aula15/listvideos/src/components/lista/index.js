import React, { Component } from 'react';
import { connect } from 'react-redux'

import { startVideo } from '../../store/actions/startvideoAC'

import Loader from '../loader'

import { Listavideo } from './styles'
import { Item } from './styles'

class Lista extends Component {
    
    loadListVideos (video) {
        return(
            <Item onClick={() => this.props.start(video) } key={video.etag}>      
                <img src={video.snippet.thumbnails.default.url} alt="bbb" />              
                <div>
                    <h2>{video.snippet.title}</h2>
                </div>
            </Item>
        )
    }


    render(){
        return(
            <>
                <Listavideo>
                    {
                        this.props.loading && (
                            <Loader />
                        )
                    }

                    {
                        this.props.videos.map(video => {
                            return this.loadListVideos(video)
                        })
                    }          
                </Listavideo>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        start: (video) => dispatch(startVideo(video))
    }
}

const mapStateToProps = (state => {
    return {
        videos: state.search.videos,
        loading: state.search.loading,
        error: state.search.error
    }
})


export default connect(mapStateToProps, mapDispatchToProps) (Lista)