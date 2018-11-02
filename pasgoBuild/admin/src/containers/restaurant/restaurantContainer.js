import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantControl from '../../components/restaurant/RestaurantControl';
import RestaurantItem from '../../components/restaurant/RestaurantItem';
import { actGetTrueSetting, actFetchLinkBlosgReq, actSaveControlBlog, actUpdateItemPostReq, actFetchInfoRestaurantReq, actSaveRestaurantFilter, atcUpdateSortIdReq } from './../../actions/restaurant'
import { actFilterLocationBlog, setSortIdForArr, getDataReq, getTrueSetting } from './../../constants/Restaurant';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';


const _ = require('lodash');


class restaurantContainer extends Component {

    componentDidMount() {
        this.props.actFetchLinkBlosgReq("Top", "ha-noi");
        this.props.actGetTrueSetting(getTrueSetting(this.props.settingState));
    }

    //Get slug select from component and get link restaurant
    getSlugRestaurant = (linkBlogs, arrLinkNhaHang) => {
        let { actSaveControlBlog, actFetchInfoRestaurantReq, controlBlogReducer } = this.props;

        let controlBlog = {
            link_blog: linkBlogs,
            slug_location: controlBlogReducer.slug_location
        };
        actSaveControlBlog(controlBlog)

        // makeCorsRequest('GET', linkBlogs)
        //     .then(function (e) {
        //         let parser = new DOMParser()
        //         let objhtml = parser.parseFromString(e.target.response, "text/html")
        //         let divBlogContent = objhtml.getElementsByClassName('blog-wapcontent')[0];
        //         let urlInBlogContent = divBlogContent.getElementsByTagName('a');

        //         let arrLinkNhaHang = [];
        //         for (let i = 0; i < urlInBlogContent.length; i++) {
        //             // console.log(urlInBlogContent[i].href)

        //             if (urlInBlogContent[i].href.split('/').length === 5 && urlInBlogContent[i].href.split('/')[3] === "nha-hang") {
        //                 arrLinkNhaHang.push(urlInBlogContent[i].href);
        //             }
        //         }
        //         arrLinkNhaHang = _.uniq(arrLinkNhaHang);
        //         console.log(arrLinkNhaHang)
        // actFetchInfoRestaurantReq(arrLinkNhaHang, controlBlogReducer.slug_location)

        // });

        actFetchInfoRestaurantReq(arrLinkNhaHang, controlBlogReducer.slug_location)

    }

    //Get slug location and set again state
    getSelectLocation = (slug_location) => {

        let { actSaveControlBlog, arrRestaurantReducer, actSaveRestaurantFilter } = this.props;

        let controlBlog = {
            link_blog: this.props.controlBlogReducer.link_blog,
            slug_location
        };
        actSaveControlBlog(controlBlog);

        let arrLinkRestaurantFilter = actFilterLocationBlog(arrRestaurantReducer, slug_location)
        actSaveRestaurantFilter(arrLinkRestaurantFilter)
    }
    //Send id update 
    SendIdPost = (id) => {
        this.props.actUpdateItemPostReq(id);
    }

    onSortEnd = ({ oldIndex, newIndex }) => {
        let { atcUpdateSortIdReq, arrResultRestaurantReducer } = this.props;
        let restaurantSorted = arrayMove(arrResultRestaurantReducer, oldIndex, newIndex)
        let resSetSortId = setSortIdForArr(restaurantSorted);

        let dataSortId = getDataReq(resSetSortId);
        atcUpdateSortIdReq(dataSortId, resSetSortId);

    };

    onSearchChangeDrop = (keySearch) => {
        this.props.actFetchLinkBlosgReq(keySearch, this.props.controlBlogReducer.slug_location);

    }

    render() {


        let { settingColor, linkBlogsReducer, arrResultRestaurantReducer, controlBlogReducer } = this.props

        let SortableList;
        if (arrResultRestaurantReducer.length < 1) {
            SortableList = SortableContainer(({ arrResultRestaurantReducer }) => {
                return (
                    <ul>

                    </ul>
                );
            });
        } else {
            SortableList = SortableContainer(({ arrResultRestaurantReducer }) => {
                return (
                    <ul className='ulTT1'>
                        {arrResultRestaurantReducer.map((value, index) => (

                            <React.Fragment
                                key={index}

                            >

                                <RestaurantItem
                                    index={index}
                                    infoRestaurant={value}
                                    SendIdPost={this.SendIdPost}
                                    settingColor={settingColor.theme_options}
                                />
                            </React.Fragment>
                        ))}


                    </ul>

                );
            });
        }

        return (
            <React.Fragment>
                <section>
                    <RestaurantControl
                        linkBlogsReducer={linkBlogsReducer}
                        getSlugRestaurant={this.getSlugRestaurant}
                        getSelectLocation={this.getSelectLocation}
                        controlBlogReducer={controlBlogReducer}
                        onSearchChangeDrop={this.onSearchChangeDrop}
                    />
                    <div className="duoi">
                        <SortableList axis='xy' distance={10} arrResultRestaurantReducer={arrResultRestaurantReducer} onSortEnd={this.onSortEnd} />

                    </div>

                </section>
            </React.Fragment>
        );
    }
}


function mapStateToProps(state) {
    return {
        linkBlogsReducer: state.linkBlogsReducer,
        controlBlogReducer: state.controlBlogReducer,
        arrRestaurantReducer: state.arrRestaurantReducer,
        arrResultRestaurantReducer: state.arrResultRestaurantReducer,
        settingColor: state.settingColor,
        settingState: state.settingState
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actFetchLinkBlosgReq: (keySearch, locations) => {
            dispatch(actFetchLinkBlosgReq(keySearch, locations));
        },
        actSaveControlBlog: (controlBlog) => {
            dispatch(actSaveControlBlog(controlBlog));
        },
        actFetchInfoRestaurantReq: (allLinkRestaurant, location) => {
            dispatch(actFetchInfoRestaurantReq(allLinkRestaurant, location));
        },
        actSaveRestaurantFilter: (arrResultRestaurant) => {
            dispatch(actSaveRestaurantFilter(arrResultRestaurant));
        },
        atcUpdateSortIdReq: (arrResSortId, resSetSortId) => {
            dispatch(atcUpdateSortIdReq(arrResSortId, resSetSortId));
        },
        actUpdateItemPostReq: (id) => {
            dispatch(actUpdateItemPostReq(id));
        },
        actGetTrueSetting: (setting) => {
            dispatch(actGetTrueSetting(setting));
        }
    }
}


export default connect(
    mapStateToProps, mapDispatchToProps
)(restaurantContainer);