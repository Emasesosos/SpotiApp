import React, { Component } from 'react'
import axios from 'axios';

class Search extends Component {

    state = {
        artistaU: '',
        artistas: [],
    }

    // buscar = (termino) => {
    //     const artist = termino.target.value;
    //     this.getArtista(artist);
    // }

    // getArtista = async (artist) => {

    //     const token = 'Bearer BQC8JAW4Z2MXi4YzJLYtZmLA4nRBwbE-GXiR1MMLTSA6O4BB3yhPu86DfaCv4rOO7tUv9Qvlj2TpH1HssWQ';
    //     const headers = {
    //         headers: {
    //             Authorization: token
    //         }
    //     };

    //     console.log(artist);

    //     const res = await axios.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=15`, headers);

    //     this.setState({
    //         artista: artist,
    //         artistas: res.data.artists.items
    //     })

    //     console.log(this.state.artistas);

    // }

    buscar = async (termino) => {

        const artista = termino.target.value;

        const token = 'Bearer BQC8JAW4Z2MXi4YzJLYtZmLA4nRBwbE-GXiR1MMLTSA6O4BB3yhPu86DfaCv4rOO7tUv9Qvlj2TpH1HssWQ';
        const headers = {
            headers: {
                Authorization: token
            }
        };

        const res = await axios.get(`https://api.spotify.com/v1/search?q=${artista}&type=artist&limit=15`, headers);
        //console.log(res.data);
        //console.log(res.data.artists.items);
        this.setState({
            artistaU: artista,
            artistas: res.data.artists.items
        })

        console.log(this.state.artistas);
        console.log(this.state.artistaU);
    }

    render() {

        const artistas = this.state.artistas;
        console.log(artistas);

        return (
            <div>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Buscar Artista..." onChange={this.buscar}/>
                    </div>
                </div>
                <div className="card-columns m-5">
                    {
                        artistas.map(artista => (
                            <div className="card"  key={artista.id}>
                                <div className="card-body">
                                    <h5 className="card-title"> {artista.name} </h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Search;
