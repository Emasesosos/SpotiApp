import React, { Component } from 'react'
import axios from 'axios';
import { headers, version } from './helper';
import Loading from './Loading';

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

    verArtista = (e) => {
        console.log('Click Ver Artista');
        console.log(e);
        console.log(e.id);
        const idArtist = e.id;
        window.open(`http://localhost:3000/artist/${idArtist}`);
    }

    render() {

        const artistas = this.state.artistas;
        //console.log(artistas);
        
        return (
            <div>
                <div>
                    <Loading/>
                </div>
                <div className="row m-5">
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

                            return <div className="card puntero"  key={artista.id} onClick={e => this.verArtista(artista)}>
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
