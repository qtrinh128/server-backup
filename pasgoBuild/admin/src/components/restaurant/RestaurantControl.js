import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
const _ = require('lodash');

class RestaurantControl extends Component {


    onSelectLinkBlog = (event, { value }) => {     
        
        let arrRestaurant = [];
        for (let i = 0; i < this.props.linkBlogsReducer.length; i++) {
            const linkBlog = this.props.linkBlogsReducer[i];
            if(linkBlog.link_blog === value){
                arrRestaurant = linkBlog.arrRestaurant;
            }
        }
        
        this.props.getSlugRestaurant(value, arrRestaurant);
    }
    onSearchChange = (e)=>{
        let keySearch = e.target.value;
        this.props.onSearchChangeDrop(keySearch)
        
    }
    onChangeLocation = (e) => {
        this.props.getSelectLocation(e.target.value);

    }

    render() {        

        let restaurantOptions = [];
        _.forEach(this.props.linkBlogsReducer, (item, index) => {
            restaurantOptions.push({
                key: index,
                text: item.name_blog,
                value: item.link_blog
            });
        });



        return (
            <React.Fragment>
                <div className="tren">
                    <div className="row">
                        <div className="alert alert-primary alert-width" role="alert">
                            <strong>Trang quản trị blogs</strong>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Dropdown placeholder='Nhà Hàng'
                            onSearchChange = {this.onSearchChange}
                            onChange={this.onSelectLinkBlog} defaultValue='tat-ca' fluid search selection options={restaurantOptions} />
                        </div>
                        <div className="col-md-2">
                            <div className="float-right">
                                <select className="custom-select" onChange={this.onChangeLocation} >
                                    <option value='ha-noi' defaultValue>Hà nội</option>
                                    <option value='da-nang'>Đà Nẵng</option>
                                    <option value='ho-chi-minh'>TP.Hồ Chí Minh</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            {this.props.controlBlogReducer.link_blog === '' ? '' :
                                <div className="alert alert-info ml-5" role="alert">
                                    <a href={this.props.controlBlogReducer.link_blog} target='_brank'>Xem trang bài blog đang chọn</a>
                                </div>
                            }

                        </div>
                    </div>
                </div>
                <hr width="100%" />

            </React.Fragment>
        );
    }
}

export default RestaurantControl;