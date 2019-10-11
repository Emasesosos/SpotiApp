import React, { Component } from 'react'
// import axios from 'axios';
import { getNewReleases } from './../services/spotify';

class Home extends Component {

    state = {
        paises: [],
        data: []
    }

    async componentDidMount() {

        const token = 'Bearer BQC9S47MBqWg06sipjMVbS8A2kp_WebgjBAgUQADc6F_mbUHxFfFEsw-gqxkjDYDprr4xxf8mpzafuagdvo';

        const headers = {
            headers: {
                Authorization: token
            }
        }

        const data = getNewReleases(headers);
        
        this.setState({
            data
        })
        
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

    render() {
        const paises = this.state.paises;
        return (
            <div>
                {paises.map(pais =>
                    <li key={pais.population}>
                        {pais.name} - {(pais.population).toLocaleString(undefined, {maximumFractionDigits:2})}
                    </li>
                )}
            </div>
        )
    }
}

export default Home;