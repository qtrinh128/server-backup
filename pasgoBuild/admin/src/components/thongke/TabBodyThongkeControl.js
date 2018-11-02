import React, { Component } from 'react';
import * as FuncTemp from './../../constants/FuncTemp'
import { Dropdown } from 'semantic-ui-react';


class TabBodyThongkeControl extends Component {


  componentWillMount() {
    let { loadDefaultChartDate } = this.props;
    let chartDate = {
      fromDate: FuncTemp.fromDate(),
      toDate: FuncTemp.toDate(),
      rangeFromToDate: FuncTemp.getDaysBetweenDates(FuncTemp.fromDate(), FuncTemp.toDate()),
      restaurantSlugDefault: 'tat-ca'
    };
    loadDefaultChartDate(chartDate);
  }

  componentWillReceiveProps(){
    
  }

  onXemThongKe = (event) => {
    event.preventDefault();

    let target = event.target;
    let fromDate = target[0].value;
    let toDate = target[1].value;
    let isValDateFrom = new Date(fromDate);
    let isValDateTo = new Date(toDate);
    if (!(isValDateFrom.getTime() === isValDateFrom.getTime()) || !(isValDateTo.getTime() === isValDateTo.getTime())) {
      alert('Chọn ngày xem thống kê sai, làm ơn kiểm tra lại!');
    } else {
      let startDate = new Date(fromDate).getTime();
      let endDate = new Date(toDate).getTime();
      if (startDate > endDate) {
        alert("Ngày bắt đầu luôn phải nhỏ hơn ngày kết thúc, làm ơn kiểm tra lại!");
      } else {
        let {TabControl} = this.props;
        let chartDate = {
          fromDate,
          toDate,
          rangeFromToDate: FuncTemp.getDaysBetweenDates(fromDate, toDate),
          restaurantSlugDefault: TabControl.restaurantSlugDefault

        }
        this.props.setDateChart(chartDate);

      }
    }
  }

  onChangeDrop = (event ,{value})=>{
    this.props.onChangeSlug(value);
  }

  render() {
    let { TabControl, AllTracking } = this.props;
    let restaurantOptions = FuncTemp.getAllRestaurant(AllTracking);

    // let restaurantOptions = [
    //   { key: 'tatca', value: 'tat-ca', text: 'Tất cả' },
    //   { key: 'bb', value: '73680', text: 'bbb' },
    //   { key: 'cc', value: '21859', text: 'ccc' },
    //   { key: 'd', value: '11306', text: 'dddd' },
    // ]; 
    return (
      <React.Fragment>

        <div className="row">
          <div className="col-md-4 ">
            <label htmlFor="sel1"><b>Nhà Hàng</b></label>
            <Dropdown placeholder='Nhà Hàng' onChange={this.onChangeDrop} defaultValue='tat-ca' fluid search selection options={restaurantOptions} />
          </div>
          <div className="col-md-2">
          </div>
          <div className="col-md-6 d-flex flex-row css-datepicker ">
            <form className="d-flex flex-row justify-content-center" onSubmit={this.onXemThongKe}>

              <label className="pr-2"> From </label>
              <input type="text" id="from" className="form-control pr-2" name="from" defaultValue={TabControl.fromDate} />
              <label className="pr-2 pl-2"> to </label>
              <input type="text" id="to" className="form-control pr-2" name="to" defaultValue={TabControl.toDate} />
              <input type="submit" className="form-control btn btn-secondary pr-2 pl-2" defaultValue="Thống Kê" />
            </form>

          </div>

        </div>

      </React.Fragment>
    );
  }
}

export default TabBodyThongkeControl;
