import React, { Component } from 'react';
import { convertBoolean } from '../../constants/FuncTemp';
import Switch from "react-switch";
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';

class ListMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAlertSave: false
    }
  }

  handleSwitchCustom = (type) => {
    this.props.getSwitchType(type)

  }


  changeHandlerBackground = (background_color) => {
    let colors = {
      type: 'background_color',
      color: background_color.color
    }
    this.props.getTheme(colors);
  }
  changeHandlerTitle = (title_color) => {
    let colors = {
      type: 'title_color',
      color: title_color.color
    }
    this.props.getTheme(colors);
  }
  changeHandlerContent = (content_color) => {
    let colors = {
      type: 'content_color',
      color: content_color.color
    }
    this.props.getTheme(colors);
  }

  changeHandlerAction = (action_color) => {
    let colors = {
      type: 'action_color',
      color: action_color.color
    }
    this.props.getTheme(colors);
  }

  handleSwitchIsMobile = () => {
    let displays = {
      type: 'is_show_mobile',
      value: true
    }
    this.props.getDisplay(displays);
  }


  changeDesktopPosition = (e) => {
    let displays = {
      type: 'desktop_position',
      value: parseInt(e.target.value)
    }
    this.props.getDisplay(displays);
  }

  changeDisplayTime = (e) => {
    let displays = {
      type: 'display_time',
      value: parseInt(e.target.value)
    }
    this.props.getDisplay(displays);

  }

  changeDelayTime = (e) => {

    let displays = {
      type: 'delay_time',
      value: parseInt(e.target.value)
    }
    this.props.getDisplay(displays);

  }

  changeMobilePositionBottom = (e) => {

    let displays = {
      type: 'mobile_position',
      value: 5
    }
    this.props.getDisplay(displays);
  }

  changeMobilePositionTop = (e) => {

    let displays = {
      type: 'mobile_position',
      value: 6
    }
    this.props.getDisplay(displays);
  }

  onSaveSetting = () => {
    this.props.onSaveSetting();
    setTimeout(() => {
      this.setState({
        isAlertSave: true
      });
    }, 500);
    setTimeout(() => {
      this.setState({
        isAlertSave: false
      });
    }, 3000);
  }
  render() {
    let { settingColor, settingState } = this.props;

    let { theme_options, display_option } = settingColor;


    return (
      <React.Fragment>


        <div className="container col-md-12" >

          <ul className="nav nav-tabs d-flex" style={{ margintop: 50 }} >
            <li className="nav-item" style={{ padding: 0, margin: 0, width: 165 }} >
              <a data-toggle="tab" className="nav-link active" href="#home">Thiết lập cài đặt</a>
            </li>
            <li className="nav-item" style={{ padding: 0, margin: 0, width: 165 }}>
              <a data-toggle="tab" className="nav-link" href="#menu1">Thiết lập hiện thị</a>
            </li>
          </ul>
          {/* Tab panes */}

          <div className="tab-content" style={{ padding: 0, margin: 0 }}>

            {this.state.isAlertSave ?
              <div className="alert alert-success col-md-3 mt-2 ml-2 float-right  justify-content-center" role="alert">
                Đã lưu cài đặt thông báo thành công!
                      </div>
              :
              null
            }


            <div id="home" className="container tab-pane active col-12 col-12-new">
              <br />
              <div className="shop p-3">

                <div className="animated fadeIn ">
                  <div className="mb-3">
                    <div className="checkItem1 form-group">
                      <label className="mr-2">Sử dụng giao diện tùy chỉnh</label>
                      <label htmlFor="normal-switch">

                        <div className="action-switch">
                          <Switch
                            onChange={() => this.handleSwitchCustom(settingColor.type)}
                            checked={settingColor.type === 'custom' ? true : false}
                            className="react-switch"
                            id="normal-switch"
                            height={20}
                            width={40}
                            marginRight={10}
                            marginLeft={10}
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="row" style={{ with: "100%" }}  >
                    <div className="col-12 col-sm-6">

                      <label htmlFor="bg_color">Màu nền</label>
                      <div className="row">
                        <span>
                          <div style={{ position: 'relative' }}>
                            <input type="text"
                              disabled={settingColor.type === 'custom' ? null : "disabled"}
                              value={theme_options.background_color}
                              className="form-control" />
                          </div>
                        </span>

                        {settingColor.type === 'custom' ?
                          <ColorPicker
                            animation="slide-up"
                            color={theme_options.background_color}
                            onChange={this.changeHandlerBackground}
                            className={'qCaidatColor'}
                          />
                          :
                          <span className="rc-color-picker-trigger qCaidatColor mb-1" unselectable="unselectable" style={{ backgroundColor: theme_options.background_color, width: 30, height: 30 }}></span>
                        }

                      </div>



                      <label htmlFor="bg_color">Màu tiêu đề</label>
                      <div className="row">
                        <span>
                          <div style={{ position: 'relative' }}>
                            <input type="text"
                              disabled={settingColor.type === 'custom' ? null : "disabled"}
                              value={theme_options.title_color}
                              className="form-control" />
                          </div>
                        </span>
                        {settingColor.type === 'custom' ?

                          <ColorPicker
                            animation="slide-up"
                            color={theme_options.title_color}
                            onChange={this.changeHandlerTitle}
                            className={'qCaidatColor'}
                          />
                          :
                          <span className="rc-color-picker-trigger qCaidatColor mb-1" unselectable="unselectable" style={{ backgroundColor: theme_options.title_color, width: 30, height: 30 }}></span>

                        }
                      </div>

                    </div>
                    <div className="col-12 col-sm-6">

                      <label htmlFor="bg_color">Màu nội dung</label>
                      <div className="row">
                        <span>
                          <div style={{ position: 'relative' }}>
                            <input type="text"
                              value={theme_options.content_color}

                              disabled={settingColor.type === 'custom' ? null : "disabled"}
                              className="form-control" />
                          </div>
                        </span>
                        {settingColor.type === 'custom' ?

                          <ColorPicker
                            animation="slide-up"
                            color={theme_options.content_color}
                            onChange={this.changeHandlerContent}
                            className={'qCaidatColor'}
                          />
                          :
                          <span className="rc-color-picker-trigger qCaidatColor mb-1" unselectable="unselectable" style={{ backgroundColor: theme_options.content_color, width: 30, height: 30 }}></span>

                        }
                      </div>
                      <label htmlFor="bg_color">Màu hành động</label>

                      <div className="row">
                        <span>
                          <div style={{ position: 'relative' }}>
                            <input type="text"
                              value={theme_options.action_color}

                              disabled={settingColor.type === 'custom' ? null : "disabled"}
                              className="form-control" />

                          </div>
                        </span>
                        {settingColor.type === 'custom' ?

                          <ColorPicker
                            animation="slide-up"
                            color={theme_options.action_color}
                            onChange={this.changeHandlerAction}
                            className={'qCaidatColor'}
                          />
                          :
                          <span className="rc-color-picker-trigger qCaidatColor mb-1" unselectable="unselectable" style={{ backgroundColor: theme_options.action_color, width: 30, height: 30 }}></span>

                        }
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>


            {/* phần setting giao diên */}
            <div id="menu1" className="container tab-pane fade col-12 col-12-new ">
              <br />
              <div className="shop p-3">
                <div className="animated fadeIn display-options">
                  <div className="mb-3">
                    <div className="checkItem1 form-group">
                      <label className="mr-2">Sử dụng giao diện tùy chỉnh</label>
                      <label htmlFor="normal-switch">

                        <div className="action-switch">
                          <Switch
                            onChange={() => this.handleSwitchCustom(settingColor.type)}
                            checked={settingColor.type === 'custom' ? true : false}
                            className="react-switch"
                            id="normal-switch"
                            height={20}
                            width={40}
                            marginRight={10}
                            marginLeft={10}
                          />
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="name">Vị trí hiển thị</label>
                        <select id="desktop_position"
                          onChange={this.changeDesktopPosition}
                          disabled={settingColor.type === 'custom' ? null : "disabled"}
                          value={display_option.desktop_position}
                          type="select" className="form-control">
                          <option value={1}>Top left</option>
                          <option value={2}>Top right</option>
                          <option value={3}>Bottom left</option>
                          <option value={4}>Bottom right</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label >Thời gian hiển thị (giây)</label>
                        <div className="input-container"><input id="display_time"
                          disabled={settingColor.type === 'custom' ? null : "disabled"}
                          onChange={this.changeDelayTime}
                          name="display_time" type="number" className="form-control" value={display_option.delay_time} /><span className="input-label">seconds</span></div>                  </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="display_time" >Khoảng thời gian giữa 2 thông báo (giây)</label>
                        <div className="input-container"><input id="display_time"
                          disabled={settingColor.type === 'custom' ? null : "disabled"}
                          onChange={this.changeDisplayTime}
                          name="display_time" type="number" className="form-control" value={display_option.display_time} /><span className="input-label">seconds</span></div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6" style={{ display: 'flex', alignItems: 'center' }}>
                      <div className="row">
                        <div className="col-md-12">
                          <label htmlFor="name">
                            <div className="form-check form-check-inline">
                              <div className="checkbox">
                                <Switch
                                  onChange={() => this.handleSwitchIsMobile()}
                                  checked={convertBoolean(display_option.is_show_mobile)}
                                  className="react-switch"
                                  id="normal-switch"
                                  height={20}
                                  width={40}
                                  marginRight={10}
                                  marginLeft={10}
                                  disabled={settingColor.type === 'custom' ? false : true}
                                />
                                <label style={{ paddingLeft: 8 }}>Hiển thị trên di động </label>
                              </div>
                              <div className="form-check form-check-inline ml-2">
                                <input id="mobile_position_bottom"
                                  disabled={(settingColor.type === 'custom') && (convertBoolean(display_option.is_show_mobile)) ? null : "disabled"}
                                  onChange={this.changeMobilePositionBottom}
                                  name="mobile_position" style={{ transform: 'scale(1.5)' }} type="radio" className="form-check-input form-check-input" defaultChecked={true} />
                                <label htmlFor="mobile_position_bottom" className="form-check-label form-check-label">Phía dưới</label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input id="mobile_position_top"
                                  disabled={(settingColor.type === 'custom') && (convertBoolean(display_option.is_show_mobile)) ? null : "disabled"}
                                  onChange={this.changeMobilePositionTop}
                                  name="mobile_position" style={{ transform: 'scale(1.5)' }} type="radio" className="form-check-input form-check-input" defaultChecked={false} />
                                <label htmlFor="mobile_position_top" className="form-check-label form-check-label ">Phía trên</label>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='row justify-content-center pb-4'>
              <button className="btn btn-success"
                onClick={this.onSaveSetting}
              >
                <span className="far fa-save">Lưu lại</span>
              </button>
            </div>


          </div>
        </div>

      </React.Fragment>

    );
  }
}
export default ListMenu;
