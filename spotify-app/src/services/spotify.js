import axios from 'axios';

export const getNewReleases = async (headers) => {
    console.log('Servicio de Spotify Listo');
    const res = await axios.get('https://api.spotify.com/v1/browse/new-releases?limit=20', headers);
    console.log(res.data);
}