import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Switch from "react-switch";
import { SortableElement } from 'react-sortable-hoc';


class RestaurantItem extends Component {

    constructor() {
        super();
        this.state = {
            value: 'this.props.infoRestaurant.link_restaurant',
            copied: false,
            vlCP: 'Copy'
        };
    }

    handleChange = (id) => {
        this.props.SendIdPost(id);
    }

    CopyTextCL = () => {
        this.setState({
            vlCP: 'Copied',
            value: this.props.infoRestaurant.link_restaurant
        })
        setTimeout(() => {
            this.setState({
                vlCP: 'Copy'
            });
        }, 1500);
    }

    render() {
        let { infoRestaurant, index ,settingColor} = this.props;
        const SortableItem = SortableElement(({ infoRestaurant }) =>
            <li className='liTT1 noselect'>

                <div className="item-post" style={{backgroundColor:settingColor.background_color}}>
                    <div className="avatar-post float-left mr-1">
                        <img src={infoRestaurant.image} className="img-thumbnail avatar-post" alt="hinh-anh" />
                    </div>
                    <div className="body-post float-left">
                        <div className="title-post message_ticker" style={{color:settingColor.title_color}} >{infoRestaurant.title}</div>
                        <div className="content-post">
                            <a className="message_ticker " value={infoRestaurant.link_restaurant} href={infoRestaurant.link_restaurant} target="_blank" id="copyLink" style={{color:settingColor.content_color}}>{infoRestaurant.content}</a>
                        </div>
                        <div className="action-post" style={{color:settingColor.action_color}}>{infoRestaurant.action_discount}</div>
                    </div>
                    <div className="div-trai float-right">

                        <div className="row float-right">
                            <div className="copylink">
                                <CopyToClipboard

                                    text={this.props.infoRestaurant.link_restaurant}
                                    onCopy={() => this.setState({ copied: true })}>
                                    <button className="btnCopy" onClick={this.CopyTextCL}>{this.state.vlCP}</button>

                                </CopyToClipboard>


                            </div>
                        </div>

                        <div className="row">
                            <div className="action-switch">
                                <Switch
                                    onChange={() => this.handleChange(infoRestaurant.id)}
                                    checked={infoRestaurant.is_active}
                                    className="react-switch"
                                    id="normal-switch"
                                    height={20}
                                    width={40}
                                    marginRight={10}
                                    marginLeft={10}
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </li>
        );

        return (

            <React.Fragment>


                <SortableItem index={index} infoRestaurant={infoRestaurant} />


            </React.Fragment>
        );
    }
}

export default RestaurantItem;