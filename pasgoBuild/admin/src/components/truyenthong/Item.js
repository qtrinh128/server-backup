import React, { Component } from 'react';
import Switch from "react-switch";
import { SortableElement } from 'react-sortable-hoc';

class Item extends Component {
    handleChange = () => {
        this.props.getNotifi(this.props.itemCommunication);
    }
    clickDelete = () => {
        //eslint-disable-next-line
        let check = confirm('Xóa thông báo?');
        if (check) {
            this.props.getIdItem(this.props.itemCommunication.id);
        }
    }
    render() {
        let { itemCommunication, index, settingColor } = this.props;
        let fmIs_active = (itemCommunication.is_active).toString();
        let is_active = fmIs_active === 'true' ? true : false;

        const SortableItem = SortableElement(({ itemCommunication }) =>
            <li className='liTT noselect'>
                <div className="item-thong-bao-truyen-thong" style={{backgroundColor:settingColor.background_color}}>
                    <div className="div-hinh-anh-truyen-thong float-left">
                        <img src={itemCommunication.image} className="img-thumbnail hinh-anh-truyen-thong" alt="hinh-anh" />
                    </div>
                    <div className="body-thong-bao-truyen-thong float-left">
                        <div className="tieu-de-truyen-thong "  style={{color:settingColor.title_color}} >{itemCommunication.title}</div>
                        <div className="noi-dung-truyen-thong message_ticker"><a href={itemCommunication.link_communication} target="_blank" style={{color:settingColor.content_color}}>{itemCommunication.content}</a></div>
                        <div className="hanh-dong-giam-gia" style={{color:settingColor.action_color}}>{itemCommunication.action_discount}</div>
                    </div>
                    <div className="tat-thong-bao float-right">
                        <div className="row float-right">
                            <div className="xoa-thong-bao">
                                <button type="button" className="close" aria-label="Close" onClick={this.clickDelete}>
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="kich-hoat-thong-bao">
                                <Switch
                                    onChange={this.handleChange}
                                    checked={is_active}
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
                <SortableItem  index={index} itemCommunication={itemCommunication} />
            </React.Fragment >
        );
    }
}

export default Item;