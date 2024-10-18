import axios from 'axios';

const API_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'x-RapidAPI-key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const apiData = async (url) => {
    const { data } = await axios.get(`${API_URL}/${url}`,options);

    return data;
}

// /search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50