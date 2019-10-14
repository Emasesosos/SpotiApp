import axios from 'axios';

export const getNewReleases = async() => {
    console.log('Servicio de Spotify Listo');

    const token = 'Bearer BQAE7a1W7TTJ_0rH2oQNABJGs4-CZ7CJ6FmW8HwkPzWdC2eGgIhlh-1ejqRTR-NJuoar9e_wOcWuIEOCPEU';
    const headers = {
        headers: {
            Authorization: token
        }
    };

    const res = await axios.get('https://api.spotify.com/v1/browse/new-releases?limit=20', headers);
    return res;
    console.log(res.data);

    // this.setState({
    //     data: res.data
    // });
    // console.log(this.state.data);
}