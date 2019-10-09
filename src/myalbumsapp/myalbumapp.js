import React, { Component } from 'react';
import MyAddAlbum from './myaddalbum';
import { myAlbumAction } from './myalbumaction'
import { connect } from 'react-redux';

class MyAlbumApp extends Component{
    render(){
        return (
            <div>
                <div>Hello From My My Album</div>
                {
                    this.props.route==='addAlbum'
                    ? 
                    <MyAddAlbum/>
                    :
                    <div>
                        <input type="button" onClick={()=>this.props.onAlbumAdd('addAlbum')} value="Add Album" />
                        {this.props.albums.map((album,key)=>{
                            return(
                                <div key={key}>{album}</div>
                            )                        
                        })}
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        route: state.route,
        albums: state.albums    
})

const mapDispatchToProps = (dispatch) =>({
    onAlbumAdd: (route) => dispatch(myAlbumAction(route))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyAlbumApp);