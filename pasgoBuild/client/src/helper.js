
export const variable = [
    'customer_name',
    'restaurant_title'
];

export const generateTitle = (title, data) => {
    let { customerName } = data;
    let result = title.replace(`{{${variable[0]}}}`, customerName);


    return result;
};
export const generateRestaurantName = (restaurantTitle, data) => {
    let { restaurantName } = data;
    let result = restaurantTitle.replace(`{{${variable[1]}}}`, restaurantName);
    return result;
};

export const isMobileScreen = () => window.matchMedia("only screen and (max-width: 480px)").matches;

export function timeSince(date) {

    let min = Math.floor(Math.random() * 10) + 1


    return min + " minutes ago"
}


export function filterRestaurantWithSlug(arrRestaurants, arrSlug) {

    let result = [];
    for (let i = 0; i < arrRestaurants.length; i++) {
        let restaurant = arrRestaurants[i];
        for (let j = 0; j < arrSlug.length; j++) {
            if (arrSlug[j] === restaurant.restaurantSlug) {
                result.push(restaurant)
            }
        }

    }
    return result;

}

export function sortId (arr){
    let sortTable = arr.sort(function(a, b){
        return a.sortId-b.sortId;
    });
    return sortTable;
}



export function filterSlugCommunication(communications, category, locations) {
    let resultFilter = []
    for (let i = 0; i < communications.length; i++) {
        const element = communications[i];
        if ((element.category === category) && (element.isActive === true) && (element.locations === locations)) {
            resultFilter.push(element)
        }
    }
    let result = sortId(resultFilter)
    return result
}


export function filterRestaurantInBlog(articles, locations) {
    // console.log('helpperrrrrrrrrrrr');
    // console.log(articles);
    // console.log('helpperrrrrrrrrrrr');
    let resultFilter = []
    for (let i = 0; i < articles.length; i++) {
        const element = articles[i];

        if ((element.isActive === true) && (element.locations === locations)) {
            resultFilter.push(element)
        }
    }


    // console.log('helpperrrrrrrrrrrr');
    // console.log(result);
    // console.log('helpperrrrrrrrrrrr');
    let result = sortId(resultFilter)
    return result
}


