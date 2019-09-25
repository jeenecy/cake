import axios from 'axios';
export default {
    getHomeData(){
        return (dispatch)=>{
              axios.get("http://rap2api.taobao.org/app/mock/231921/home/get").then((res)=>{
                  dispatch({
                      type:'HOME',
                      list:res
                  })
              })
        }
    }
}