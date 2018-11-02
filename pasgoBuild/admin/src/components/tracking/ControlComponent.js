import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { log } from 'util';
var dra = require('date-range-array')

class ControlComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listDate: [],
            startDate: moment(),
            endDate: moment(),
        };
        // this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        // var b = moment().subtract(31, 'day');

        for (let i = 0; i < 8; i++) {
            this.state.listDate[i] = (moment().subtract(7 - i, 'day')).format("DD/MM/YYYY");
        }
        this.setState({
            startDate: moment().subtract(7, 'day'),
            endDate: moment().subtract(0, 'day'),
        });

        this.props.getListDate(this.state.listDate)
    }


    handleChange = (date) => {

        this.setState({
            startDate: date,
        });

    }
    handleChangeEnd = (date) => {
        this.setState({
            endDate: date
        });

    }

    onSubmitDate = (e) => {
        e.preventDefault();
        this.setState({
            listDate: []
        })
        var dates = dra(this.state.startDate.format("YYYY-MM-DD"), this.state.endDate.format("YYYY-MM-DD"))
        for (let i = 0; i < dates.length; i++) {
            dates[i] = dates[i].split('-')[2] + '/' + dates[i].split('-')[1] + '/' + dates[i].split('-')[0];
        }

        this.props.getListDate(dates)

    }

    onChangeSelect = (e, { value }) => {
        this.props.getChangeSelect(value);

    }

    render() {
        // let arrTracking = [
        //     { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
        //     { key: 'vn', value: 'vn', flag: 'vn', text: 'VietNam' },
        //     { key: 'en', value: 'en', flag: 'en', text: 'English' }
        // ]

        let { dropdownOptions } = this.props; // bang voi: let dropdownOptions = this.props.dropdownOptions
      
    
        return (
            <React.Fragment>
                <div className="col-md-4 ">
                    <label htmlFor="sel1"><b>Thông báo</b></label>
                    <Dropdown placeholder='Thông báo '
                        fluid search selection 
                        options={dropdownOptions}
                        onChange={this.onChangeSelect}
                        defaultValue='tat-ca' />
                </div>
                <form className="d-flex flex-row mt-4 justify-content-center"
                    onSubmit={this.onSubmitDate}
                >
                    <label className="pr-2"> From </label>
                    <DatePicker
                        maxDate={moment()}
                        dateFormat="DD/MM/YYYY"
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                    />
                    <label className="pr-2 pl-2"> to </label>
                    <DatePicker
                        minDate={this.state.startDate}
                        maxDate={moment()}
                        dateFormat="DD/MM/YYYY"
                        selected={this.state.endDate}
                        onChange={this.handleChangeEnd}
                    />

                    <input type="submit" className="col-md-2 ml-2 mb-2 form-control btn btn-secondary pr-2 pl-2" />
                </form>

            </React.Fragment>
        );
    }
}

export default ControlComponent;