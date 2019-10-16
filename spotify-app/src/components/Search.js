import React, { Component } from 'react'
import axios from 'axios';

class Search extends Component {

    state = {
        artista: '',
        artistas: [],
        cargando: false
    }

    buscar = async (termino) => {
        
        const artista = termino.target.value;
        
        const token = 'Bearer BQBq4228ioP-kQH5kT0uk_khGH_x03pNgRjD3r85sP3tc8nPwWXCDTnsTyvvJbng3Ty2HQQ2153m16lM5po';
        
        const headers = {
            headers: {
                Authorization: token
            }
        };

        console.log(artista);
        
        // this.setState({
        //     artista
        // });

        if(artista) {
            let url = `https://api.spotify.com/v1/search?q=${artista}&type=artist&limit=15`;
            let res = await axios.get(url, headers);
            let artistas = res.data.artists.items;
            this.setState({
                artista,
                artistas
            })
            const lengthArtista = this.state.artista;
            const lengthArtistas = this.state.artistas;
            console.log(this.state.artista);
            console.log(lengthArtista.length);
            console.log(this.state.artistas);
            console.log(lengthArtistas.length); 
            if(lengthArtistas.length > 0) {
                this.setState({
                    artistas
                })
                console.log(lengthArtistas.length); 
            }
            console.log(lengthArtistas.length); 
        }

        // if(artista){
        //     console.log('true');
        //     let url = `https://api.spotify.com/v1/search?q=${artista}&type=artist&limit=15`;
        //     let res = await axios.get(url, headers);
        //     let data = res.data;
        //     let artistas = res.data.artists.items;
        //     console.log(res);
        //     console.log(data);
        //     console.log(artistas);
        //     //console.log(artistas[0].images);

        //     artistas.map(artista => {
        //         const imagenesArtista = artista.images;
        //         //console.log(artista.images);
        //         console.log(imagenesArtista);
        //         console.log(imagenesArtista.length);
        //         if(imagenesArtista.length > 0) {
        //             console.log('Hay Imagenes');
        //             this.setState({
        //                 artistas: res.data.artists.items
        //             })
        //             console.log(this.state.artistas);
        //         } else {
        //             console.log('No hay Imagenes');
        //         }
        //     }) 

        // } else {
        //     this.setState({
        //         artista: ''
        //     })
        // }

        
    }
    // ******************************************************************************************
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
    // *******************************************************************************************
    // buscar = async (termino) => {

    //     let artista = termino.target.value;
        
    //     if(artista) {

    //         console.log('true->artista');
    //         console.log(artista);
    //         const token = 'Bearer BQDcsDznKzxmWiTK0JDvYepRHBRN1ynk8CQrAx6n-jyfNrDnWdvgYtcGakEnDF4LXXGE7IMujTDtf1cQCz0';
    //         const headers = {
    //             headers: {
    //                 Authorization: token
    //             }
    //         };
    //         let url = `https://api.spotify.com/v1/search?q=${artista}&type=artist&limit=1`;
    //         console.log(url);
    //         let res = await axios.get(url, headers);
    //         console.log(res);
    //         console.log(res.data);
    //         console.log(res.data.artists);
    //         console.log(res.data.artists.items);
    //         let artistasSearch = res.data.artists.items;
    //         if(artistasSearch.length > 0) {
    //             console.log('true->artistas');
    //             this.setState({
    //                 artista,
    //                 artistas: res.data.artists.items
    //             })
    //         } else {
    //             console.log('false->artistas');
    //         }
    //     }
    // }

    render() {

        //const artistas = this.state.artistas;
        //console.log(this.state.artistas);
        //console.log(this.state.artista);

        return (
            <div>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Buscar Artista..." onChange={e => this.buscar(e)}/>
                    </div>
                </div>
                <div className="card-columns m-5">
                    {/*
                        artistas.map(artista => (
                            <div className="card"  key={artista.id}>
                                <img src={artista.images[0].url} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title"> {artista.name} </h5>
                                </div>
                            </div>
                        ))
                    */}
                </div>
            </div>
        )
    }
}

export default Search;
