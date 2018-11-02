import * as Types from './../../constants/ActionType';

let initialState = [];

const linkBlogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.RESTAURANT.GET_LINK_BLOGS:
            state = action.linkBlogs.blogs
            return [...state]

        default: return state
    }
}

export default linkBlogsReducer;