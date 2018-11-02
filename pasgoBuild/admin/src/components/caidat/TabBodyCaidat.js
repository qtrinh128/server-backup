import React, { Component } from 'react';
class TabBodyCaidat extends Component {
 
  
  
  render() {
    let {settingColor} = this.props;
    let {theme_options} = settingColor;
    
    return (
      <React.Fragment>

              <div className="container-fluid col-12 d-flex border-bt">
                <div className="flex-grow-1 pb-2 pt-3">
                  <h3>Cài đặt thông báo</h3>
                </div>

              </div>
              <div className="row rowSlider">
                <div className="col d-flex justify-content-center  ">
                  <div className="  media effect8" style={{ background:theme_options.background_color,  marginTop: 46 }}>
                    <div className="div-hinh-anh-truyen-thong float-left">
                      <img src="http://file.vforum.vn/hinh/2016/08/hinh-anh-mon-an-ngon-pho-1.jpg"
                        className="media-object border img" alt="Cinque Terre" style={{ width: 60, height: 60 }} />
                    </div>
                    <div className="body-thong-bao-truyen-thong float-left">
                      <div className="tieu-de-truyen-thong" style={{color: theme_options.title_color}} >ăn gì hôm nay</div>
                      <div className="noi-dung-truyen-thong message_ticker"  style={{color: theme_options.content_color}}  >Những món ăn ngon </div>
                      <div className="hanh-dong-giam-gia"  style={{color: theme_options.action_color}}   >khuyến mãi 30%</div>
                    </div>
                    <div className="tat-thong-bao float-right">
                      <div className="row float-right">
                        <div className="xoa-thong-bao">
                          <button type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end tuy chinh */}
              {/* hiển thị menu */}

      </React.Fragment>
    );
  }
}
export default TabBodyCaidat;
