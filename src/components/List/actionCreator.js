import axios from 'axios';
export default {
    getListData(){
        return (dispatch)=>{
              axios.get("http://rap2api.taobao.org/app/mock/231921/list/get").then((res)=>{
                  dispatch({
                      type:'LIST',
                      list:res
                  })
              })
        }
    }
}