import * as Types from './../constants/ActionType';
import { apiGetSetting, apiPostUpdateSetting } from './../utils/ApiCaidat';

export const actSetArrSetting = (settings) => {
    return {
        type: Types.SETTING.SET_ARR_SETTING,
        settings
    }
}

export const actFetchSettingReq = () => {
    return (dispatch) => {
        return apiGetSetting('setting', 'GET', null).then(res => {            
            dispatch(actFetchSetting(res.data));
        });
    }
}

export const actFetchSetting = (settings) => {
    return {
        type: Types.SETTING.FETCH_SETTING,
        settings
    }
}

export const actUpdateSettingReq = (setting, type) => {
    return (dispatch) => {
        return apiPostUpdateSetting('setting?type=' +  type, setting).then(res => {
            console.log(res);
        })
    }


}