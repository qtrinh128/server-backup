import {
    actResultLinkBlogs
} from './../actions/index';
import { connect } from 'react-redux';
import React, { Component } from 'react';

const _ = require('lodash');




class htmlBlog extends Component {
    createCORSRequest = (method, url) => {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            // XHR for Chrome/Firefox/Opera/Safari.
            xhr.open(method, url, true);
        } else if (typeof XDomainRequest != "undefined") {
            // XDomainRequest for IE.
            xhr = new XMLHttpRequest();
            xhr.open(method, url);
        } else {
            // CORS not supported.
            xhr = null;
        }
        return xhr;
    }

    makeCorsRequest = (url) => {
        console.log(url);
        var resultLink = [];

        // This is a sample server that supports CORS.
        // var url = 'https://pasgo.fitisoft.com/blog/ha-noi/dia-diem-an-uong/top-10-nha-hang-viet-nam-ngon-noi-tieng-nhat-o-tphcm-655';
        var xhr = this.createCORSRequest('GET', url);
        if (!xhr) {
            alert('CORS not supported');
            return;
        }
        //<a href="/nha-hang/tan-hoa-cau-buffet-theo-phong-cach-nguoi-viet-713"
        // Response handlers.
        xhr.onload = function () {
            let text = xhr.responseText;
            // var txt = text.match(/href=\"(.*)\"\s(.*)[\<\/a\>]/gmi)
            var parser = new DOMParser()
            let objhtml = parser.parseFromString(text, "text/html")


            let divBlogContent = objhtml.getElementsByClassName('blog-wapcontent')[0];
            let urlInBlogContent = divBlogContent.getElementsByTagName('a');

            let arrLinkNhaHang = [];
            for (let i = 0; i < urlInBlogContent.length; i++) {

                if (urlInBlogContent[i].href.split('/').length === 5 && urlInBlogContent[i].href.split('/')[3] === "nha-hang") {
                    arrLinkNhaHang.push(urlInBlogContent[i].href);
                }
            }

            resultLink = _.uniq(arrLinkNhaHang);
            this.props.actResultLinkBlogs(resultLink);
            return resultLink;

        };

        xhr.onerror = function () {
            alert('Woops, there was an error making the request.');
        };

        xhr.send();
        return resultLink;
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}
function mapDispatchToProps(dispatch) {
    return {
        actResultLinkBlogs:(arr)=>{
            dispatch(actResultLinkBlogs(arr))
        }
    };
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(htmlBlog);










// // Create the XHR object.
// export const createCORSRequest = (method, url) => {
//     var xhr = new XMLHttpRequest();
//     if ("withCredentials" in xhr) {
//         // XHR for Chrome/Firefox/Opera/Safari.
//         xhr.open(method, url, true);
//     } else if (typeof XDomainRequest != "undefined") {
//         // XDomainRequest for IE.
//         xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//     } else {
//         // CORS not supported.
//         xhr = null;
//     }
//     return xhr;
// }

// // Helper method to parse the title tag from the response.

// // Make the actual CORS request.
// var resultLink1;

// export const makeCorsRequest = (url) => {
//     console.log(url);
//     var resultLink = [];

//     // This is a sample server that supports CORS.
//     // var url = 'https://pasgo.fitisoft.com/blog/ha-noi/dia-diem-an-uong/top-10-nha-hang-viet-nam-ngon-noi-tieng-nhat-o-tphcm-655';
//     var xhr = createCORSRequest('GET', url);
//     if (!xhr) {
//         alert('CORS not supported');
//         return;
//     }
//     //<a href="/nha-hang/tan-hoa-cau-buffet-theo-phong-cach-nguoi-viet-713"
//     // Response handlers.
//     xhr.onload = function () {
//         let text = xhr.responseText;
//         // var txt = text.match(/href=\"(.*)\"\s(.*)[\<\/a\>]/gmi)
//         var parser = new DOMParser()
//         let objhtml = parser.parseFromString(text, "text/html")


//         let divBlogContent = objhtml.getElementsByClassName('blog-wapcontent')[0];
//         let urlInBlogContent = divBlogContent.getElementsByTagName('a');

//         let arrLinkNhaHang = [];
//         for (let i = 0; i < urlInBlogContent.length; i++) {

//             if (urlInBlogContent[i].href.split('/').length === 5 && urlInBlogContent[i].href.split('/')[3] === "nha-hang") {
//                 arrLinkNhaHang.push(urlInBlogContent[i].href);
//             }
//         }

//         resultLink = _.uniq(arrLinkNhaHang);
//         actResultLinkBlogs(resultLink);
//         console.log(resultLink1);
//         console.log(resultLink1);
//         resultLink1 = resultLink
//         return resultLink;

//     };

//     xhr.onerror = function () {
//         alert('Woops, there was an error making the request.');
//     };

//     xhr.send();
//     return resultLink;
// }

// export const getResultLink = () => {
//     setTimeout(() => {
//         console.log(resultLink1);

//         return resultLink1
//     }, 20000);
// }
