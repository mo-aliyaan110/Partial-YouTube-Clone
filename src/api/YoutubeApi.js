import axios from 'axios';

export default axios.create({
    
    baseURL: 'https://www.googleapis.com/',
    params: {
        key: 'AIzaSyAuopbNUQYuXyxl28Hm5mgyZDNSdkmFgEg',
        part : 'snippet',
        type : 'video',
        maxResults: 5,
        
    }
})

