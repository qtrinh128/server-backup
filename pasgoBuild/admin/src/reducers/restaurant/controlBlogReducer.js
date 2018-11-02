import * as Types from '../../constants/ActionType';

let initialState = {
    link_blog: '',
    slug_location: 'ha-noi'
};

const controlBlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.RESTAURANT.SAVE_CONTROL_BLOG:
            state = action.controlBlog            
            return {...state}

        default: return state
    }
}

export default controlBlogReducer;