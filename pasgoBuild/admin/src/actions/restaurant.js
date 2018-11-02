import * as Types from './../constants/ActionType';
import { apiBlog, postAPIIsActive, putAPI, updateSortId } from './../utils/ApiRestaurant';
import { actFilterLocationBlog, } from './../constants/Restaurant';


// Get all link blogs and save on store
export const actFetchLinkBlosgReq = (keySearch, locations) => {
    return (dispatch) => {
        return apiBlog("blogs?keysearch=" + keySearch + "&locations=" + locations, 'GET', null).then(res => {

            dispatch(actFetchLinkBlogs(res.data));
        });
    }
}

export const actFetchLinkBlogs = (linkBlogs) => {
    return {
        type: Types.RESTAURANT.GET_LINK_BLOGS,
        linkBlogs
    }
}

//setting color
export const actGetTrueSetting = (settingcolor) => {
    return {
        type: Types.RESTAURANT.SETTING_COLOR,
        settingcolor
    }
}


// Get control (link blog select and location slug select)
export const actSaveControlBlog = (controlBlog) => {
    return {
        type: Types.RESTAURANT.SAVE_CONTROL_BLOG,
        controlBlog
    }
}

// Download content and paser link blog to get link restaurant
export const makeCorsRequest = (method, url) => {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    });
}

export const actFetchInfoRestaurantReq = (arrLinkRestaurant, location) => {
    return (dispatch) => {
        let arrResults = [];

        // let getDetailResaurant = (link_restaurant) => {
        //     return new Promise(async (resolve, reject) => {
        //         await apiBlog(`restaurant?link_restaurant=${link_restaurant}`, 'GET', null).then(res => {
        //             console.log(link_restaurant);
        //             // console.log(res.data);
        //             if (res.data !== '') {
        //                 let add_isactive = res.data;
        //                 add_isactive.is_active = 'true';
        //                 arrResults.push(add_isactive);
        //                 resolve(arrResults)

        //             }

        //         });
        //     });
        // }
        // var promises = [];
        // for (let i = 0; i < arrLinkRestaurant.length; i++) {
        //     const link_one = arrLinkRestaurant[i];
        //     promises.push(getDetailResaurant(link_one));
        // }

        // for (let i = 0; i < promises.length; i++) {
        //     const e = promises[i];
        //     e.then(result =>{
        //         return dispatch(actPostInfoRestaurantReq(result, location));
        //     })
        // }


        // Promise.all(promises)
        //     .then((acct) => {
        //         // Both requests are now complete
        //         console.log(acct);
        //         console.log('gggggggggg');
        //     });


        //USE SETTIMEOUT
        for (let i = 0; i < arrLinkRestaurant.length; i++) {
            const e = arrLinkRestaurant[i];
            apiBlog(`restaurant?link_restaurant=${e}`, 'GET', null).then(res => {

                if (res.data !== '') {
                    let add_isactive = res.data;
                    add_isactive.is_active = 'true';
                    arrResults.push(add_isactive)
                }
            });
        }

        let a = dispatch(actPostInfoRestaurantReq([], location));

        setTimeout(() => {
            return dispatch(actPostInfoRestaurantReq(arrResults, location));
        }, 6000);
    }
}

//POST INFO RESTAURANT DB
export const actPostInfoRestaurantReq = (arrInfo, location) => {

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
                    let result = actFilterLocationBlog(arrResults, location)
                    dispatch(actSaveRestaurantFilter(result));
                    return dispatch(actFetchInfoRestaurant(arrResults));
                })
        }
        getDataApiPostBlog();
    }
}


// //get info restauran restaurant?link_restaurant
// export const actFetchInfoRestaurantReq = (arrLinkRestaurant) => {

//     return (dispatch) => {

//         function asyncApiBlog(value) {

//             return new Promise((resolve) => {
//                 apiBlog(`restaurant?link_restaurant=${value}`, 'GET', null).then(res => {
//                     if (res.data !== '') {

//                         let add_isactive = res.data;
//                         add_isactive.is_active = 'true';
//                         resolve(add_isactive)
//                     }
//                 });
//             });
//         }

//         function getDataApiBlog() {
//             let i;
//             let promises = [];
//             for (i = 0; i < arrLinkRestaurant.length; i++) {
//                 const linkrestaurant = arrLinkRestaurant[i];
//                 promises.push(asyncApiBlog(linkrestaurant));
//             }
//             Promise.all(promises)
//                 .then((arrResults) => {

//                     return dispatch(actPostInfoRestaurantReq(arrResults));
//                 })
//         }
//         getDataApiBlog();
//     }
// }

// //POST INFO RESTAURANT DB
// export const actPostInfoRestaurantReq = (arrInfo) => {

//     return (dispatch) => {

//         function asyncApiPostBlog(value) {
//             return new Promise((resolve) => {
//                 postAPIIsActive('restaurant', value).then(res => {


//                     resolve(res.data)


//                 });
//             });
//         }

//         function getDataApiPostBlog() {
//             let i;
//             let promises = [];
//             for (i = 0; i < arrInfo.length; i++) {
//                 const aInfo = arrInfo[i];
//                 aInfo.sortId = new Date().valueOf() + i
//                 promises.push(asyncApiPostBlog(aInfo));
//             }
//             Promise.all(promises)
//                 .then((arrResults) => {
//                     return dispatch(actFetchInfoRestaurant(arrResults));
//                 })
//         }
//         getDataApiPostBlog();
//     }
// }



//SAVE INFRO RESTAURANT
export const actFetchInfoRestaurant = (infoRestaurant) => {
    return {
        type: Types.RESTAURANT.GET_ALL_RESTAURANT,
        infoRestaurant
    }
}


export const atcUpdateSortIdReq = (data, arrResultsRestaurant) => {

    return (dispatch) => {
        return updateSortId('restaurant/update', data).then(() => {
            dispatch(actSaveRestaurantFilter(arrResultsRestaurant));
        });
    }
}


export const actSaveRestaurantFilter = (arrRestaurantFilter) => {
    return {
        type: Types.RESTAURANT.SAVE_RESTAURANT_FILTER,
        arrRestaurantFilter
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
        type: Types.RESTAURANT.UPDATE_ITEMPOST,
        id
    }
}