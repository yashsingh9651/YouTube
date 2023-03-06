import axios from "axios";
const request = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyBP_P2nilsiLkhMioDSWbYFNUwhWjUcbUU",

    }
})
export default request;