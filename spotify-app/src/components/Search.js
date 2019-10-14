import React, { Component } from 'react'

class Search extends Component {

    state = {
        artista: ''
    }

    buscar = (e) => {
        console.log('Input', e.target.value);
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Buscar Artista..." onChange={this.buscar}/>
                </div>
            </div>
        )
    }
}

export default Search;
