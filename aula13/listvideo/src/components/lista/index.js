import React, { Component } from 'react';
import { connect } from 'react-redux'


import { Listavideo } from './styles'
import { Item } from './styles'

class Lista extends Component {
    
    loadListVideos (video) {
        return(
            <Item>    
                <img src={video.snippet.thumbnails.default.url} alt="" />                    
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
                        this.props.videos.map(video => {
                            return this.loadListVideos(video)
                        })
                    }          
                </Listavideo>
            </>
        )
    }
}

const mapStateToProps = (state => {
    return {
        videos: state.search.videos,
        loading: state.search.loading,
        error: state.search.error
    }
})


export default connect(mapStateToProps, null) (Lista)