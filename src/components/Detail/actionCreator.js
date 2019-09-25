import axios from 'axios';
export default {
    getDetailData(){
        return (dispatch)=>{
              axios.get("http://rap2api.taobao.org/app/mock/231921/detail/get").then((res)=>{
                  dispatch({
                      type:'DETAIL',
                      list:res
                  })
              })
        }
    },
    // addCart(){
    //     return
    // }
}