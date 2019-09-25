import homeReducer from "../components/Home/reducer";
import listReducer from '../components/List/reducer'
import detailReducer from '../components/Detail/reducer'
// import cartReducer from '../components/Cart/reducer'
import {combineReducers} from 'redux';

var reducer =combineReducers({ //把所有的reducer合并为一个
     home:homeReducer,
     list:listReducer,
     detail:detailReducer
     // cart:cartReducer
})

export default reducer;