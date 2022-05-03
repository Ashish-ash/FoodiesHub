export const getAllFoodsReducer =  (foods = [] , action) =>{
    switch(action.type)
    {
        case "GET_FOODS_REQ":
            return action.payload;
            default:
                return foods;
    }
}
export const getFoodReducer =  (state = {} , action) =>{
    switch(action.type)
    {
        case "GET_FOOD_SUCCESS":
            return action.payload;
            default:
                return state;
    }
}
export const addItemReducer =  ( state = {}, action) =>{
    switch(action.type)
    {
        case "ADD_ITEM_SUCCESS":
            return {
                success : true
            }
            default:
                return state;
    }
}
export const updateItemReducer =  ( state = {}, action) =>{
    switch(action.type)
    {
        case "UPDATE_ITEM_SUCCESS":
            return {
                success : true
            }
            default:
                return state;
    }
}