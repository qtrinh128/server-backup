
export const variable = [
    'customer_name',
    'restaurant_title'
];

export const generateTitle = (t, data) => {
    return data.title;
};

export const generateImage = (data)=>{
    return data.image;
}

export const generateContent = (content, data)=>{

};

export const generateRestaurantName = (restaurantTitle, data) => {
    let { content } = data;
    return content;
};

export const isMobileScreen = () => window.matchMedia("only screen and (max-width: 480px)").matches;

export function timeSince(data) {

    return data.actionDiscount;
}

