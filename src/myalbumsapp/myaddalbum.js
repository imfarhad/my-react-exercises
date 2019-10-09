import React, { Component } from 'react';
import { myCreateAlbumAction } from './myalbumaction';
import { connect } from 'react-redux';

class MyAddAlbum extends Component {
    onSubmit = () =>{
        const album = document.getElementById("album").value;
        this.props.createAlbum(album);
        document.getElementById("album").value = '';
    }
    render(){
        return(
            <div>
                <input type="text" name="album" id="album" placeholder="Album Name"/>
                <input type="button" onClick={this.onSubmit} value="ADD Album"/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    createAlbum: album => dispatch(myCreateAlbumAction(album))
})

export default connect(null, mapDispatchToProps)(MyAddAlbum);