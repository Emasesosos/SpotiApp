import React, { Component } from 'react'
import axios from 'axios';
import { headers, version } from './helper';

import spotify from './../img/banner-ico.png';

class Search extends Component {

    state = {
        artista: '',
        artistas: [],
    }

    buscar = async (termino) => {
        
        const artista = termino.target.value;
        const query = `search?q=${artista}&type=artist&limit=15`;
        const url = version+query;
        const res = await axios.get(url, headers); 
        const artistas = res.data.artists.items;

        if(artista.length === 0) {
            this.setState({
                artista: '',
                artistas: []
            })
        } else if(artista.length > 0) {
            this.setState({
                artista
            })
            if(artistas.length > 0) {
                this.setState({
                    artistas
                })

            }
        }
        
    }

    render() {

        const artistas = this.state.artistas;
        //console.log(artistas);
        
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Buscar Artista..." onChange={e => this.buscar(e)}/>
                    </div>
                </div>
                <div className="card-columns m-5">
                    {
                        artistas.map(artista => {

                            let img = '';

                            if(artista.images.length > 0) {

                                img = <img src={artista.images[0].url} className="card-img-top" alt=""/>

                            } else {

                                img = <img src={spotify} className="card-img-top" alt=""/>

                            }

                            return <div className="card"  key={artista.id}>
                                        {img}
                                        <div className="card-body">
                                            <h5 className="card-title"> {artista.name} </h5>
                                        </div>
                                    </div>;
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Search;
