import React, { Component } from 'react'
import axios from 'axios';

class Home extends Component {

    state = {
        paises: []
    }

    async componentDidMount() {
        const res = await axios.get('https://restcountries.eu/rest/v2/lang/es');
        // console.log(res);
        const { data } = res;
        // console.log(data);
        this.setState({
            paises: data
        })
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