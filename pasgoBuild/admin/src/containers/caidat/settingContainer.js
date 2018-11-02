import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListMenu from './../../components/caidat/ListMenu';
import TabBodyCaidat from './../../components/caidat/TabBodyCaidat';
import {actSetArrSetting, actFetchSettingReq, actUpdateSettingReq} from './../../actions/caidat';
import {actGetTrueSetting} from './../../actions/restaurant'
import {getTrueSetting, getSettingChangeTheme, getSettingChangeDisplay, getSettingWithType} from './../../constants/caidat';

class settingContainer extends Component {


    componentDidMount(){
        this.props.actFetchSettingReq();

        setTimeout(() => {
            this.props.actGetTrueSetting(getTrueSetting(this.props.settingState));
        }, 5000);

    }

    getSwitchType = (type)=>{
        let settings = this.props.settingState;
        
        for (let i = 0; i < settings.length; i++) {
            const s = settings[i];
            if(s.type === type){
                s.is_active = false
            } else {
                s.is_active = true
            }
        }
        
        this.props.actSetArrSetting(settings);
        this.props.actGetTrueSetting(getTrueSetting(settings));


    }

    getTheme = (colors)=>{
        let settings = getSettingChangeTheme(this.props.settingState, colors);
        this.props.actGetTrueSetting(getTrueSetting(settings));
    }

    getDisplay = (displays)=>{
        let settings = getSettingChangeDisplay(this.props.settingState, displays);
        this.props.actGetTrueSetting(getTrueSetting(settings));
    }

    onSaveSetting = ()=>{

        let b = getSettingWithType(this.props.settingState, 'basic');
        let b1 = getSettingWithType(this.props.settingState, 'custom');

        console.log(b);
        console.log(b1);
        
        

        this.props.actUpdateSettingReq(getSettingWithType(this.props.settingState, 'basic'), 'basic');
        this.props.actUpdateSettingReq(getSettingWithType(this.props.settingState, 'custom'), 'custom');
    }
    render() {
        let { settingColor, settingState } = this.props;
        
        return (
            <React.Fragment>
                <section>
                    <div className="home mt-5 clearfix">
                        <div className="header col-md-12">
                            <TabBodyCaidat
                                settingColor={settingColor}
                            />

                            <ListMenu
                                settingColor={settingColor}
                                settingState={settingState}
                                getSwitchType={this.getSwitchType}
                                getTheme={this.getTheme}
                                getDisplay={this.getDisplay}
                                onSaveSetting={this.onSaveSetting}

                            />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        settingState: state.settingState,
        settingColor: state.settingColor
    };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        actSetArrSetting: (settings)=>{
            dispatch(actSetArrSetting(settings));
        },
        actGetTrueSetting: (settings)=>{
            dispatch(actGetTrueSetting(settings));
        },
        actFetchSettingReq: ()=>{
            dispatch(actFetchSettingReq());
        },
        actUpdateSettingReq: (setting, type)=>{
            dispatch(actUpdateSettingReq(setting, type));
        }
    }
}





export default connect(
    mapStateToProps,
    mapDispatchToProps
)(settingContainer);