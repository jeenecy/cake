var initState ={
    list:[]
}

 const reducer= (state = initState.list, action) => {
    switch (action.type) {  
        case 'HOME':
            var newState ={...state};
            newState.list =action.list;
            console.log(newState)
            return newState
        default:
            return state
    }
}

export default reducer;