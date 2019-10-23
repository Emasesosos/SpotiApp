import React, { Component } from 'react'
import InfoHome from './InfoHome';
import Error from './Error';

class Home extends Component {

    state = {
        error: false
    }

    getError = (error) => {
        console.log(error,'Uso de Función desde InfoHome');
        this.setState({
            error
        })
    }

    render() {

        let error = this.state.error;
        console.log(error);

        let info = '';

        if (error) {
            info = <Error/>
        } else {
            info =  <InfoHome
                        getError={this.getError}
                    />
        }
         
        return (
            <div>
                {info} 
            </div>
        ); 
    }
}

export default Home; 