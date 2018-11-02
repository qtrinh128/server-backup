const _ = require('lodash');

export const filter = (communications, locations ,category) => {
    let arrayNotifiCategory = [];
    _.forEach(communications, function (item) {
        if (item.category === category && item.locations === locations) {
            arrayNotifiCategory.push(item);
        }
    });
    return arrayNotifiCategory;
}

export const findIndex = (array, id) => {
    return array.findIndex((obj) => {
        return obj.id === id;
    });
}

export const updateIndex = (arr, id) => {
    let arrCurrent = arr;
    _.forEach(arrCurrent, (item) => {
        if (item.id === id) {
            item.is_active = !item.is_active;
        }
    });
    return arrCurrent
}

export const closeForm = () =>{
    document.getElementById('btn-close-form').click();
}

export const showNotify = () => {
    document.getElementById("thongbao").style.display = 'block';
    setTimeout(function(){
        document.getElementById("thongbao").style.display = 'none';
    }, 5000);
}

export const sortId = (communications) => {
    let sortTable = communications.sort(function(a, b){
        return a.sortId-b.sortId;
    });
    return sortTable;
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