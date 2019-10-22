import React, { Component } from 'react';
import axios from 'axios';
import { headers } from './helper';
import Loading from './Loading';

class Artista extends Component {

    state = {
        artista: ''
    }

    componentDidMount() {
        this.getArtista();
    }

    getArtista = async () => {
        const id = this.props.match.params.id;
        console.log(id);
        const res = await axios.get(`https://api.spotify.com/v1/artists/${id}`, headers);
        const artista = res.data;
        console.log(artista);
        this.setState({
            artista
        })
    }

    Search = () => {
        window.open('http://localhost:3000/search');
    }

    render() {

        const artista = this.state.artista;
        let img = '';
        let page = '';
        if (artista) {
            img = <img src={artista.images[0].url} className="img-thumbnail img-circle" alt=""/>
            page = artista.external_urls.spotify;
            console.log(page);
        }

        return(
            <div className="row">
                <Loading></Loading>
                <div className="col-2 m-5">
                    {img}
                </div>
                <div className="col">
                    <h3>{artista.name}</h3>
                    <p>
                        <a href={page} target="_blank" rel="noopener noreferrer">
                            Ir a la página del Artista
                        </a>
                    </p>
                </div>
                <div className="col-4 text-right">
                    <button onClick={this.Search} className="btn btn-outline-danger">
                        Regresar
                    </button>
                </div>
            </div>
        )
    }
}

export default Artista;