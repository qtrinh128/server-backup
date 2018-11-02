const moment = require('moment');
const _ = require('lodash');

export const fromDate = () => {
    let date = new Date();
    date.setDate(date.getDate() - 30);
    let dateString = date.toLocaleString('vn-VN').split(",")[0];
    return dateString
}
export const toDate = () => {
    let date = new Date();
    date.setDate(date.getDate() - 1);
    let dateString = date.toLocaleString('vn-VN').split(",")[0];
    return dateString;
}
export const getDaysBetweenDates = (startDate, endDate) => {
    let dates = [];
    let currDate = moment(startDate).startOf('day');
    let lastDate = moment(endDate).startOf('day');
    dates.push(currDate.clone().toDate().toLocaleString('en-GB').split(",")[0]);
    while (currDate.add(1, 'days').diff(lastDate) <= 0) {
        dates.push(currDate.clone().toDate().toLocaleString('en-GB').split(",")[0]);
    }
    return dates;
};

export const getAllInfoChart = (allTracking, restaurantSlug, rangeFromToDate) => {
    let resultRestaurantSlugs = restaurantSlug === 'tat-ca' ? allTracking : allTracking.filter(tracking =>
        tracking.restaurantSlug === restaurantSlug)

    const data = [];
    _.forEach(rangeFromToDate, aRangeFromToDate => {
        let countDisplay = 0;
        let countHover = 0;
        let countClick = 0;
        _.forEach(resultRestaurantSlugs, resultRestaurantSlug => {

            if (resultRestaurantSlug.timeCurrent === aRangeFromToDate) {
                if (resultRestaurantSlug.action === "display") {
                    countDisplay++;
                } else if (resultRestaurantSlug.action === "hover") {
                    countHover++;
                } else {
                    countClick++;
                }
            }
        });
        let addChart = {
            timeCurent: aRangeFromToDate,
            countDisplay,
            countHover,
            countClick
        }

        data.push(addChart);
    });

    return {
        restaurantSlug,
        data
    }
}


// {
//     display: [],
//     hover: [],
//     click: []
// }
export const getDataTracking = (resultTrackings) => {
    let display = [];
    let hover = [];
    let click = [];
    let countDisplay = 0;
    let countHover = 0;
    let countClick = 0;
    _.forEach(resultTrackings.data, (resultTracking) => {
        display.push(resultTracking.countDisplay);
        hover.push(resultTracking.countHover);
        click.push(resultTracking.countClick);
        countDisplay += resultTracking.countDisplay
        countHover += resultTracking.countHover
        countClick += resultTracking.countClick

    });

    return {
        display,
        hover,
        click,
        countDisplay,
        countHover,
        countClick
    }
}


export const getAllRestaurant = (allDataTracking) => {

    let getRestaurants = [];
    let resultRestaurants = [{ key: 'tatca', value: 'tat-ca', text: 'Tất cả' }]
    _.forEach(allDataTracking, (dataTracking) => {
        getRestaurants.push(dataTracking.restaurantSlug);
    });
    let getRestaurantsUnique = _.uniq(getRestaurants);
    _.forEach(getRestaurantsUnique, (restaurantsUnique) => {
        resultRestaurants.push({
            key: restaurantsUnique,
            value: restaurantsUnique,
            text: restaurantsUnique
        });
    });

    return resultRestaurants;
};

// search slungrestaurant ttnh

export const filterIDRestaurant = (postItems, value) => {
    let resultListItem = [];
    if (value === 'tat-ca') {
        return resultListItem;
    }

    
    _.forEach(postItems, (item) => {
        if (item.id === value) {
            resultListItem.push(item);
        }
    });

    return resultListItem;
}


// search slug Truyen thong

export const filterSlugTruyenThong = (communications, value) => {

    let resultListItem = [];
    _.forEach(communications, (item) => {
        if (item.category === value) {
            resultListItem.push(item);
        }
    });

    return resultListItem;
}




//Update is_active
export const updateArticleIsActive = (article, id)=>
{
    let result = article;
    let arrRestaurantCurrent = result;
    _.forEach(arrRestaurantCurrent, (item)=>{
        if(item.id === id){
            item.is_active = !item.is_active
        }
    });
    
    return result;
}


//filter location post restaurant

export const filterLocationPost = (info , location) => {
    let result = [];
    _.forEach(info , (item) => {
        if(item.locations === location){
            result.push(item);
        }
    })
    
    return result;
}




//Convert Boolean
export const convertBoolean=(check)=>{
    if(check === true){
        return true
    }
    if(check === 'true'){
        return true
    }
    if(check === false){
        return false
    }
    if(check === 'false'){
        return false
    }
}