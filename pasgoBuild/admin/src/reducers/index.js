import { combineReducers } from 'redux';
import TabControl from './thongke/TabControl';
import BarChart from './thongke/BarChart';
import AllTracking from  './thongke/ThongKe';
import TruyenThong from './truyenthong/ThongTinTruyenThong';
import ThongBaoChoTungDanhMuc from './truyenthong/ThongBaoChoTungDanhMuc';
import DanhMucDuocChon from './truyenthong/DanhMucDuocChon';
import KhuVuc from './truyenthong/KhuVuc';
import linkBlogsReducer from './restaurant/linkBlogsReducer';
import controlBlogReducer from './restaurant/controlBlogReducer';
import arrRestaurantReducer from './restaurant/arrRestaurantReducer';
import arrResultRestaurantReducer from './restaurant/arrResultRestaurantReducer';
import settingColor from './restaurant/settingColor';
import settingState from './caidat/settingState';
import trackingData from './tracking/trackingData';

const appReducers = combineReducers({
    TabControl,
    BarChart,
    AllTracking,
    TruyenThong,
    ThongBaoChoTungDanhMuc,
    DanhMucDuocChon,
    KhuVuc,
    linkBlogsReducer,
    controlBlogReducer,
    arrRestaurantReducer,
    arrResultRestaurantReducer,
    settingColor,
    settingState,
    trackingData
});

export default appReducers;