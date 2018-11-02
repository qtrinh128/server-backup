import callApi from './../utils/CallApi';
import * as Types from './../constants/ActionType';
import {filterLocationPost} from './../constants/FuncTemp'
import { putAPI, apiBlog, postAPIIsActive } from './../utils/callBlogAPI';

//thong tin nha hang
export const actFetchItemCustomerRequest = () => {
    return (dispatch) => {
        return apiBlog('articles', 'GET', null).then(res => {

            dispatch(actFetchItemCustomer(res.data));
        });
    }
}

export const actFetchItemCustomer = (postItems) => {
    return {
        type: Types.FETCH_ITEMCUSTOMER,
        postItems
    }
}

export const actDeleteItemCustomerRequest = (id) => {
    return (dispatch) => {
        return callApi(`restaurant/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteItemCustomer(id));
        });
    }
}

export const actDeleteItemCustomer = (id) => {
    return {
        type: Types.DELETE_ITEMCUSTOM,
        id
    }
}

export const actAddItemCustomReq = (itemcustoms) => {
    return (dispatch) => {
        return callApi('restaurant', 'POST', itemcustoms).then(res => {
            dispatch(actAddItemCustom(res.data));
        });
    }
}

export const actAddItemCustom = (itemcustoms) => {
    return {
        type: Types.ADD_ITEMCUSTOMER,
        itemcustoms
    }
}

export const actFilterItemCustomer = (resultSlugItemCustom) => {
    return {
        type: Types.FILTER_ITEMCUSTOMER,
        resultSlugItemCustom
    }
}

export const actSetFilter = (slug) => {
    return {
        type: Types.SET_FILTER,
        slug
    }
}

//ThongKe
export const actionFetchDataTrackingReq = () => {

    return (dispatch) => {
        return callApi('tracking', 'GET', null).then(res => {
            // dispatch(actionFetchDataTracking(res.data))
        });
    }
}
export const actionFetchDataTracking = (allDataTracking) => {
    return {
        type: Types.FECTH_DATA_TRACKING,
        allDataTracking
    }
}

//SAVE LOCATION
export const actLocationPost = (locationPOST) => {

    return {
        type: Types.LOCATION_POST,
        locationPOST
    }
}

// get info nha hang
export const actFetchBlogReq = () => {
    return (dispatch) => {
        return apiBlog('articles', 'GET', null).then(res => {
            dispatch(actFetchBlog(res.data));
        });
    }
}

export const actFetchBlog = (postItems) => {
    return {
        type: Types.FETCH_ITEMBLOG,
        postItems
    }
}

//get info restauran restaurant?link_restaurant
export const actFetchInfoRestaurantReq = (arrLinkRestaurant, locationPost) => {

    return (dispatch) => {

        function asyncApiBlog(value) {
            return new Promise((resolve) => {
                apiBlog(`restaurant?link_restaurant=${value}`, 'GET', null).then(res => {
                    if (res.data !== '') {
                        let add_isactive = res.data;
                        add_isactive.is_active = 'true';
                        resolve(add_isactive)
                    }
                });
            });
        }

        function getDataApiBlog() {
            let i;
            let promises = [];
            for (i = 0; i < arrLinkRestaurant.length; i++) {
                const linkrestaurant = arrLinkRestaurant[i];
                promises.push(asyncApiBlog(linkrestaurant));
            }
            Promise.all(promises)
                .then((arrResults) => {
                    return dispatch(actPostInfoRestaurantReq(arrResults, locationPost));
                })
        }
        getDataApiBlog();
    }
}

//POST INFO RESTAURANT DB
export const actPostInfoRestaurantReq = (arrInfo, locationPost) => {

    return (dispatch) => {

        function asyncApiPostBlog(value) {
            return new Promise((resolve) => {
                postAPIIsActive('restaurant', value).then(res => {


                    resolve(res.data)


                });
            });
        }

        function getDataApiPostBlog() {
            let i;
            let promises = [];
            for (i = 0; i < arrInfo.length; i++) {
                const aInfo = arrInfo[i];
                aInfo.sortId = new Date().valueOf() + i
                promises.push(asyncApiPostBlog(aInfo));
            }
            Promise.all(promises)
                .then((arrResults) => {
                    let result = filterLocationPost(arrResults, locationPost)
                    
                    return dispatch(actFetchInfoRestaurant(result));
                })
        }
        getDataApiPostBlog();
    }
}



//SAVE INFRO RESTAURANT
export const actFetchInfoRestaurant = (infoRestaurant) => {
    return {
        type: Types.GET_INFO_RESTAURANT,
        infoRestaurant
    }
}

//get link blogs

export const actFetchLinkBlogsReq = () => {
    return (dispatch) => {
        return apiBlog('blogs', 'GET', null).then(res => {
            dispatch(actFetchLinkBlogs(res.data));
        });
    }
}

export const actFetchLinkBlogs = (linkblogs) => {
    return {
        type: Types.FETCH_LINK_BLOGS,
        linkblogs
    }
}

export const actResultLinkBlogs = (arrLinkBlogs, locationPost) => {
    return {
        type: Types.RESULT_LINK_BLOGS,
        resultLinkBlogs: {
            arrLinkBlogs,
            locationPost
        }

    }
}

//update item post

export const actUpdateItemPostReq = (id) => {
    return (dispatch) => {
        return putAPI('restaurant/update', id).then(res => {

            if (res.data) {
                dispatch(actUpdateitemPost(id));

            }
        });
    }
}

export const actUpdateitemPost = (id) => {
    return {
        type: Types.UPDATE_ITEMPOST,
        id
    }
}