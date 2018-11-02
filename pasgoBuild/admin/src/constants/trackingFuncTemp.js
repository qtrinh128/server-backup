import moment from 'moment';

export const filterDataDropdown = (data) => {

    let resultData = [{
        key: 'tat-ca',
        value: 'tat-ca',
        text: 'Tất cả '
    }];
    for (let i = 0; i < data.length; i++) {
        const item = data[i];

        let check = 0;

        for (let j = 0; j < resultData.length; j++) {
            const itemRs = resultData[j];
            if (item.link_notify === itemRs.key) {
                check = check + 1;
            }


        }
        if (check === 0) {
            resultData.push({
                key: item.link_notify,
                value: item.link_notify,
                text: item.name_notify
            })
        }
    }

    return resultData;

};

export const filterDataHeader = (arrayDate, data, slugLink) => {

    let resultData = {
        numberDisplay: 0,
        numberHover: 0,
        numberClick: 0
    }
    let tong = filterDataChart(arrayDate, data, slugLink);
    for (let i = 0; i < tong.display.length; i++) {
        resultData.numberDisplay += tong.display[i]
    }
    for (let i = 0; i < tong.hover.length; i++) {
        resultData.numberHover += tong.hover[i]
    }
    for (let i = 0; i < tong.click.length; i++) {
        resultData.numberClick += tong.click[i]
    }

    return resultData;
}

export const filterDataChart = (arrayDate, data, slugLink) => {

    console.log(data);
    console.log(data[0].time_current);
    console.log(typeof data[0].time_current);

    let t = data[0].time_current;
    t = moment(Number(t)).format('DD/MM/YYYY');
    console.log(t);
    console.log(typeof t);


    let resultData = {
        hover: [],
        click: [],
        display: [],

    }
    let filterData = [];
    if (slugLink === 'tat-ca') {
        filterData = data;
    } else {
        for (let i = 0; i < data.length; i++) {
            const e = data[i];
            if (slugLink === e.link_notify) {
                filterData.push(e);
            }
        }
    }

    for (let i = 0; i < arrayDate.length; i++) {
        let hover = 0;
        let display = 0;
        let click = 0;


        for (let j = 0; j < filterData.length; j++) {

            // filterData[j].time_current = moment(Number(filterData[j].time_current)).format('DD/MM/YYYY');
            // console.log(filterData[j].time_current);
            let t = filterData[j].time_current;
            t = moment(Number(t)).format('DD/MM/YYYY');

            if (t === arrayDate[i] && filterData[j].action === 'display') {
                display++;
            }
            if (t === arrayDate[i] && filterData[j].action === 'click') {
                click++;
            }
            if (t === arrayDate[i] && filterData[j].action === 'hover') {
                hover++;
            }
        }

        resultData.hover.push(hover);
        resultData.display.push(display);
        resultData.click.push(click);
    }

    return resultData;
}

