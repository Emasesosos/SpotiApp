import React, { Component } from 'react'
import axios from 'axios';

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

        const token = 'Bearer BQC8JAW4Z2MXi4YzJLYtZmLA4nRBwbE-GXiR1MMLTSA6O4BB3yhPu86DfaCv4rOO7tUv9Qvlj2TpH1HssWQ';
        const headers = {
            headers: {
                Authorization: token
            }
        };

        const res = await axios.get('https://api.spotify.com/v1/browse/new-releases?limit=20', headers);
        //console.log(res.data);
        const { items } = res.data.albums;
        //const artists = items.artists;
        this.setState({
            releases: res.data,
            songs: items,
            //artists: artists
        });
        console.log(this.state.releases);
        console.log(this.state.songs);
        //console.log(this.state.artists);

    }

    render() {
        const songs = this.state.songs;
        //const artists = this.state.songs.artists;
        console.log(songs);
        //console.log(artists);
        return (
            <div className="card-columns">
                {
                    songs.map(song => (
                        <div className="card" key={song.id}>
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
        )
    }
}

export default Home;