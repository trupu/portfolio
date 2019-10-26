import axios from 'axios';

export default {
    getMusic(url) {
        return new Promise(async(resolve, reject) => {
            try {
                const music = await axios.get(url);
                resolve(music);
            } catch(err) {
                reject(err);
            }
        });
    }
}