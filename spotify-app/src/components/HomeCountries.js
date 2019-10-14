import React, { Component } from 'react'
import axios from 'axios';
//import { getNewReleases } from './../services/spotify';

class Home extends Component {

    state = {
        releases: []
    }

    componentDidMount() {

        this.getNewReleases();
        
        /* ***** Ejemplo de Consumo de API con React ***** */
        // const res = await axios.get('https://restcountries.eu/rest/v2/lang/es');
        // console.log(res);
        // const { data } = res;
        // console.log(data);
        // this.setState({
            // paises: data
        // })
        // console.log(this.state.paises);
    }

    getNewReleases = async () => {
        console.log('Servicio de Spotify Listo');

        const token = 'Bearer BQCzcgL_D1TLIXIfWd_PJhP5OJ1CReg6G4CkhU_6JiCghw1X6JzTNxkVAKpuZSF4OCCgiVGOf8ujPoS-his';
        const headers = {
            headers: {
                Authorization: token
            }
        };

        const res = await axios.get('https://api.spotify.com/v1/browse/new-releases?limit=20', headers);
        console.log(res.data);

        this.setState({
            releases: res.data
        });
        console.log(this.state.data);
    }

    render() {
        // const paises = this.state.paises;
        return (

            <div>
            
            {
                /*<div>
                    {paises.map(pais =>
                        <li key={pais.population}>
                            {pais.name} - {(pais.population).toLocaleString(undefined, {maximumFractionDigits:2})}
                        </li>
                    )}
                </div>*/
            }
            </div>
        )
    }
}

export default Home;