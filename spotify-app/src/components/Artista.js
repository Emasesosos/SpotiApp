import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { headers, version } from './helper';
//import Loading from './Loading';

class Artista extends Component {

    state = {
        artista: '',
        topTracks: [],
        id: ''
    }

    componentDidMount() {
        this.getArtista();
    }

    getArtista = async () => {

        const id = this.props.match.params.id;
        //console.log(id);
        const query = `artists/${id}`;
        const url = version+query;
        const res = await axios.get(url, headers);
        const artista = res.data;
        //console.log(artista);
        this.setState({
            artista,
            id
        })

        this.getTopTracks(id);
    }

    getTopTracks = async (id) => {

        const query = `artists/${id}/top-tracks?country=us`;
        const url = version+query;
        const res = await axios.get(url, headers);
        const topTracks = res.data.tracks;
        //console.log(topTracks);
        this.setState({
            topTracks
        })
    }

    render() {

        const artista = this.state.artista;
        console.log(artista);
        const topTracks = this.state.topTracks;
        console.log(topTracks);

        let img = '';
        let page = '';
        let tracks = '';

        if (artista) {
            img = <img src={artista.images[0].url} className="img-thumbnail img-circle" alt=""/>;
            page = artista.external_urls.spotify;
            //console.log(page);
        } 

        if (topTracks) {
            tracks = this.state.topTracks;
            console.log(tracks);
        }

        return(
            <div>

                <div className="row d-flex justify-content-between">
                    {/* <Loading></Loading> */}
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
                    <div className="col-4 text-center">
                        <Link to={'/search'} className="btn btn-outline-danger">
                            Regresar
                        </Link>
                    </div>
                </div>
                
                <div className="row m-5">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Foto</th>
                                    <th>Album</th>
                                    <th>Canción</th>
                                    <th>Vista Previa</th>
                                </tr>
                            </thead>
                            { tracks.map(track => {
                                const { album, name, uri } = track;
                                return  <tbody key={track.id}>
                                            <tr>
                                                <td>
                                                    <img src={album.images[0].url} className="img-thumb" alt=""/>
                                                </td>
                                                <td>{album.name}</td>
                                                <td>{name}</td>
                                                <td>
                                                    <iframe src={`https://open.spotify.com/embed?uri=${uri}`} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="myFrame"></iframe>
                                                    {/* <audio src={preview_url} controls></audio> */} 
                                                </td>
                                            </tr>
                                        </tbody>                        
                            })} 
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}

export default Artista;