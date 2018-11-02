import ControllerCom from './controllerCom';
import { cssString } from './css.js';
import Request from './request';
import { defaultSettings } from './settings';
import {  MESSAGE_TEXT_DAT_CHO } from './constants';
import {  filterSlugCommunication, filterRestaurantInBlog } from './helper';


function createCss() {
    var newStyle = document.createElement('style');
    newStyle.appendChild(document.createTextNode(cssString));
    document.head.appendChild(newStyle);
}
createCss();

const request = new Request();
let getSetting = null;



let day12 = function Test12() {

    let p = new Promise(function (resolve) {
        setTimeout(
            function () {
                request.getSetting().then(data => {
                    data ? getSetting = data : getSetting = defaultSettings;
                    getSetting.messageText = MESSAGE_TEXT_DAT_CHO;

                });
            }, 666
        )
    });
    return p
}


//Phan tich URL
let pathName = document.location.pathname;
let address = ['ha-noi', 'ho-chi-minh', 'da-nang'];
let arrPath = pathName.split('/');
let originUrl = document.location.origin;
let slugBlog = ['dia-diem-an-uong'];


//LOAI THONG BAO 1
// if (true) {
if (arrPath.length === 3 && address.indexOf(arrPath[1]) !== -1) {

    let dayC = function TestC() {
        var controllerCom = new ControllerCom();
        const requestCom = new Request();
        setTimeout(
            function () {

                requestCom.getNotificationsCommunication()
                    .then(data => {
                        let result = filterSlugCommunication(data.communications, arrPath[2], arrPath[1])
                        controllerCom.setRequest(requestCom);
                        controllerCom.setListNotification(result);
                        let settings1 = getSetting;
                        controllerCom.init(settings1);
                    });

            }, 3000
        )
    }
    day12()
    dayC()
};


// CASE 2
// Loại 2: Sẽ có url dạng https://pasgo.fitisoft.com/ha-noi/blog/dia-diem-an-uong/top-10-nha-hang-lau-nuong-han-quoc-ngon-nhat-o-ha-noi-1475. Như vậy url có 5 level, có chứa khu vực, blog và slug blog thì đó là detail blog. Lưu ý đối với dạng blog thì cần lọc ra được toàn bộ các link nhà hàng có trong blog.
// if (true) {
if (arrPath.length === 5 && address.indexOf(arrPath[2]) !== -1 && arrPath[1] === "blog" && slugBlog.indexOf(arrPath[3]) !== -1) {
    let divBlogContent = document.getElementsByClassName('blog-wapcontent')[0];
    let urlInBlogContent = divBlogContent.getElementsByTagName('a');
    let arrLinkNhaHang = [];
    for (let i = 0; i < urlInBlogContent.length; i++) {
        if (urlInBlogContent[i].href.replace(originUrl, "").replace('https://pasgo.vn', "").split('/').length === 3 && urlInBlogContent[i].href.replace(originUrl, "").replace('https://pasgo.vn', "").split('/')[1] === "nha-hang") {
            arrLinkNhaHang.push(urlInBlogContent[i].href);
        }
    }

    day12()

    setTimeout(() => {

        //Loai Thong Bao 2
        var controllerBlog2 = new ControllerCom();
        const requestBlog2 = new Request();
        let arrNotify2 = []
        for (let i = 0; i < arrLinkNhaHang.length; i++) {
            const element = arrLinkNhaHang[i];
            requestBlog2.getARestaurant(element)
                .then(data => {
                    arrNotify2.push(data)
                })
        }

        setTimeout(() => {

            let result = filterRestaurantInBlog(arrNotify2, arrPath[2])


            controllerBlog2.setRequest(requestBlog2);
            controllerBlog2.setListNotification(result);
            const settings1 = getSetting;
            controllerBlog2.init(settings1);


        }, 3000);

    }, 2000);


}

