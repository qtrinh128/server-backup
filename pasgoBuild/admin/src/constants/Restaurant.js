import {convertBoolean} from './FuncTemp';
const _ = require('lodash');

export const sortId = (restaurants) => {
    let sortTable = restaurants.sort(function(a, b){
        return a.sortId-b.sortId;
    });
    return sortTable;
}



export const actFilterLocationBlog = (arrLinkRestaurant,location)=>{
    let resultFilter = [];
    _.forEach(arrLinkRestaurant , (item) => {
        if(item.locations === location){
            resultFilter.push(item);
        }
    })
    let result = sortId(resultFilter)
    return result;

}   


export const setSortIdForArr = (arrCommunicationSorted)=>{
    let arrSortId = [];
    let result = arrCommunicationSorted;
    let arrGetSortId = _.sortBy(arrCommunicationSorted, 'sortId')
    _.forEach(arrGetSortId, (element)=>{
        arrSortId.push(element.sortId);
    });
    
    _.forEach(result, (item, index)=>{
        item.sortId = arrSortId[index]        
    });

    return result;
}

export const getDataReq = (arrCommunicationSorted)=>{
    let resultArr = [];
    _.forEach(arrCommunicationSorted, (element)=>{
        resultArr.push({
            id: element.id,
            sortId: element.sortId
        });
    });
    let result = {
        updateSordId: resultArr
    };
    return result;
}



export const getTrueSetting = (settings)=>{

    for (let i = 0; i < settings.length; i++) {
        const setting = settings[i];
        if(convertBoolean(setting.is_active)){
            return setting
        }
    }
}