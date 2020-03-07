const axios = require('axios');

const getLugarLaLng = async (dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': 'a05fbb0ef8mshbc4ddb4b88aa5f9p13ff27jsnb10a2403cfd8'
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new  Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLaLng
}

