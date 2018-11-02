import React from 'react';
import Item from './Item';
import Styled from 'styled-components';
import { closeForm, showNotify} from './../../constants/TruyenThong';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';

const TagP = Styled.p`
    display: none;
`;
class Header extends React.Component {
    onSelectedCategory = (e) => {
        this.props.getSelectedCategory(e.target.value)
    }
    onSelectedLocations = (e) => {
        this.props.getSelectedLocations(e.target.value);
    }
    onAddCommunication = (e) => {
        e.preventDefault();
        let refs = this.refs;
        let sortId = new Date().getTime();
        let aCommunication = {
            title: refs.title.value,
            content: refs.content.value,
            action_discount: refs.action_discount.value,
            category: refs.selectCategory.value,
            link_communication: refs.link_communication.value,
            image: refs.image.value,
            locations: refs.selectLocations.value,
            is_active: 1,
            sortId: sortId
        }
        if (aCommunication.category === '' || aCommunication.locations === '') {
            alert('Vui lòng điền đầy đủ thông tin');
        } else {
            closeForm();
            this.props.getAddCommunication(aCommunication);
            showNotify();
            this.refs.formAdd.reset();
        }
    }
    getNotifi = (notifi) => {
        this.props.getNotifi(notifi);
    }

    onSortEnd = ({ oldIndex, newIndex }) => {

        let communicationsSorted = arrayMove(this.props.communications, oldIndex, newIndex)
        this.props.getArrCommunicationsSorted(communicationsSorted)

    };

    render() {
        let SortableList;
        if (this.props.communications.length < 1) {
            SortableList = SortableContainer(({ communications }) => {
                return (
                    <ul>

                    </ul>
                );
            });
        } else {
            SortableList = SortableContainer(({ communications }) => {
                return (
                    <ul className='ulTT'>
                        {communications.map((value, index) => (

                            <React.Fragment
                                key={index}
                            >
                                <Item
                                    index={index}
                                    itemCommunication={value}
                                    getIdItem={this.props.getIdItem}
                                    getNotifi={this.getNotifi}
                                    getSortId={this.props.getSortId}
                                    settingColor={this.props.settingColor}
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
                    <div className="row">
                        <div className="col-md-4 ">
                            <div className="alert alert-info float-left" role="alert">
                                <h4> Quản lý thông báo truyền thông</h4>
                                <TagP id="thongbao" >Thêm thành công, vui lòng ấn Ctrl+R nếu không thấy thông báo hiển thị</TagP>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="float-right">
                                <select className="custom-select" onChange={this.onSelectedCategory}>
                                    <option value='bo-suu-tap' defaultValue>Bộ sưu tập</option>
                                    <option value='an-uong'>Ăn uống</option>
                                    <option value='nha-hang-uy-tin'>Nhà hàng uy tín</option>
                                    <option value='uu-dai-hot'>Ưu đãi Hot </option>
                                    <option value='diem-den-moi-nhat'>Điểm đến mới nhất</option>
                                    <option value='kham-pha'>Khám phá</option>
                                    <option value='blog'>Blog</option>
                                    <option value='video'>Video Pasgo</option>
                                </select>
                            </div>
                            <div className="float-right">
                                <select className="custom-select" onChange={this.onSelectedLocations}>
                                    <option value='ha-noi' defaultValue>Hà nội</option>
                                    <option value='da-nang'>Đà Nẵng</option>
                                    <option value='ho-chi-minh'>TP.Hồ Chí Minh</option>
                                </select>
                            </div>

                        </div>
                        <div className="col-md-2" id="form-them">
                            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#truyenThong">Thêm mới</button>
                            <form onSubmit={this.onAddCommunication} ref="formAdd">
                                <div id="truyenThong" className="modal fade" role="dialog">
                                    <div className="modal-dialog mg-hd">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h4 className="modal-title">Thêm thông báo mới</h4>
                                                <button
                                                    id="btn-close-form"
                                                    type="button"
                                                    className="close"
                                                    data-dismiss="modal"
                                                >   ×
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="form-group">
                                                    <label >Tiêu đề</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="title"
                                                        ref="title"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label >Nội dung</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="content"
                                                        ref="content"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label >Hành động</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="action_discount"
                                                        ref="action_discount"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <select className="custom-select" ref="selectLocations">
                                                        <option value='' defaultValue>Chọn khu vực</option>
                                                        <option value='ha-noi' defaultValue>Hà nội</option>
                                                        <option value='da-nang'>Đà Nẵng</option>
                                                        <option value='ho-chi-minh'>TP.Hồ Chí Minh</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <select className="custom-select" ref="selectCategory">
                                                        <option value='' defaultValue>Chọn Danh mục</option>
                                                        <option value='bo-suu-tap' >Bộ sưu tập</option>
                                                        <option value='an-uong'>Ăn uống</option>
                                                        <option value='nha-hang-uy-tin'>Nhà hàng uy tín</option>
                                                        <option value='uu-dai-hot'>Ưu đãi Hot </option>
                                                        <option value='diem-den-moi-nhat'>Điểm đến mới nhất</option>
                                                        <option value='kham-pha'>Khám phá</option>
                                                        <option value='blog'>Blog</option>
                                                        <option value='video'>Video Pasgo</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label >Link thông báo</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="link_communication"
                                                        ref="link_communication"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label >Link thumbnail</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="txtThunbnail"
                                                        ref='image'
                                                        required

                                                    />
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="submit" className="btn btn-success" data-toggle="modal">Lưu lại</button>
                                                <button type="button" className="btn btn-default" data-dismiss="modal">Thoát</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <SortableList axis='xy' distance={10} communications={this.props.communications} onSortEnd={this.onSortEnd} />

                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Header;