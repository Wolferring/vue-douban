import axios from 'axios'

let url = process.env.NODE_ENV !== 'production' ? '/apis/' : 'http://api.douban.com/v2/';

let func_axios = (api,cb) => {
    axios.get(api).then(function(res){
        if(res.status >= 200 && res.status <300){
            cb(res.data)
        }
    }).catch((error) => {
        // new Error('desc');
        return Promise.reject(error)
    })
}

export default {
    getNowList:(cb)=>func_axios(url + 'movie/in_theaters?city=成都',cb),
    getComingList:(cb)=>func_axios(url + 'movie/coming_soon',cb),
    getFilmDetail:(id,cb)=>func_axios(url+'movie/subject/'+id,cb),
    getUserInfo:(id,cb)=>func_axios(url+'user/'+id,cb),
    getSearchResult:(payload,cb)=>{
        var type = payload.field;
        switch (type) {
            case 'MUSIC_LIST':
                var target = '/music/search?q='+payload.content
                break;
            default:
                // statements_def
                var target = '/music/search?q='+payload.content

                break;
        }
        func_axios(url+target,cb)
    }
}