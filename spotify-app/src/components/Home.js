import React, { Component } from 'react'
import axios from 'axios';
import { headers, version } from './helper';
import Loading from './Loading';

class Home extends Component {

    state = {
        releases: [],
        songs: [],
        artists: []
    }

    componentDidMount() {
        this.getNewReleases();
    }

    getNewReleases = async () => {
        console.log('Servicio de Spotify Listo');
        
        const query = 'browse/new-releases?limit=20';
        const url = version+query;
        const res = await axios.get(url, headers);
        //console.log(res.data);
        const { items } = res.data.albums;
        //const artists = items.artists;
        this.setState({
            releases: res.data,
            songs: items,
            //artists: artists
        });
        //console.log(this.state.releases);
        //console.log(this.state.songs);
        //console.log(this.state.artists);

    }

    verArtista = (e) => {
        console.log('Click Ver Artista');
        console.log(e);
        console.log(e.artists[0].id);
        const idArtist = e.artists[0].id;
        window.open(`http://localhost:3000/artist/${idArtist}`);
    }

    render() {
        const songs = this.state.songs;
        //const artists = this.state.songs.artists;
        console.log(songs);
        //console.log(artists);

        const loading = <Loading/>
        return (
            <div>
                {loading}
                <div className="card-columns m-5">
                    {
                        songs.map(song => (
                            <div className="card puntero" key={song.id} onClick={e => this.verArtista(song)}>
                                <img src={song.images[0].url} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {song.name}
                                    </h5>
                                    <p className="card-text">
                                        { 
                                            (song.artists).map(artist => (
                                                <span className="badge badge-pill badge-primary" key={artist.id}>
                                                    {artist.name}
                                                </span>
                                            ))
                                        }
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        )
    }
}

export default Home;