
let sql = require("mssql");
const config = require('./../../config/env/dbconfig');

const ChangeToSlug = (chuoi) => {
  let slug;
  //Đổi chữ hoa thành chữ thường
  slug = chuoi.toLowerCase();
  //Đổi ký tự có dấu thành không dấu
  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
  slug = slug.replace(/đ/gi, 'd');
  //Xóa các ký tự đặt biệt
  slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
  //Đổi khoảng trắng thành ký tự gạch ngang
  slug = slug.replace(/ /gi, "-");
  //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
  //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
  slug = slug.replace(/\-\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-/gi, '-');
  slug = slug.replace(/\-\-/gi, '-');
  //Xóa các ký tự gạch ngang ở đầu và cuối
  slug = '@' + slug + '@';
  slug = slug.replace(/\@\-|\-\@|\@/gi, '');
  //In slug ra textbox có id “slug”
  return slug;
}
ClearTagHTML = (action_discount) => {
  return action_discount.replace(/<\/?.+?>/ig, '');
}




module.exports = {
  postTracking: async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');

    let executeQuery = function (res, query) {
      new sql.ConnectionPool(config.dbConfigSetting).connect().then((pool) => {
        return pool.request().query(query);
      }).then((data) => {
        res.status(200).json({ status: 'ok' });
        sql.close();
      }).catch((err) => {
        res.status(500).send({ message: `${err}` });
        sql.close();
      });
    }

    let tracking = req.body;
    let action = tracking.action;
    let link_notify = tracking.link_notify;
    let time_current = tracking.time_current;
    let name_notify = tracking.name_notify;

    let query = `INSERT INTO tracking (action, link_notify, time_current, name_notify)
                  values (N'${action}', N'${link_notify}', '${time_current}', N'${name_notify}')`

    executeQuery(res, query);
  },

  getAllCommunication: async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');

    let executeQuery = function (res, query) {
      new sql.ConnectionPool(config.dbConfigSetting).connect().then((pool) => {
        return pool.request().query(query);
      }).then((data) => {
        let reult = {
          communications: data.recordsets[0]
        }
        sql.close();
        return res.status(200).json(reult);
      }).catch((err) => {
        sql.close();
        return res.status(500).send({ message: `${err}` });
      });
    }
    let query = "SELECT * FROM communication";
    executeQuery(res, query);
  },

  getAllSetting: async (req, res) => {
    if (req.param('is_active') === 'true') {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');





      let executeQuery = function (res, query) {
        new sql.ConnectionPool(config.dbConfigSetting).connect().then((pool) => {
          return pool.request().query(query);
        }).then((data) => {

          let settingIsActive = data.recordsets[0][0];
          let resultIsActive = {
            "id": settingIsActive.id,
            "theme_options": {
              "title_color": settingIsActive.title_color,
              "background_color": settingIsActive.background_color,
              "action_color": settingIsActive.action_color,
              "content_color": settingIsActive.content_color
            },
            "display_option": {
              "display_time": settingIsActive.display_time,
              "delay_time": settingIsActive.delay_time,
              "is_show_mobile": settingIsActive.is_show_mobile,
              "mobile_position": settingIsActive.mobile_position,
              "desktop_position": settingIsActive.desktop_position
            },
            "type": settingIsActive.type,
            "is_active": settingIsActive.is_active
          }
          res.status(200).json(resultIsActive);
          sql.close();
        }).catch((err) => {
          res.status(500).send({ message: `${err}` });
          sql.close();
        });
      }

      var query = "select * from [setting] where is_active = 1";
      executeQuery(res, query)
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');

      let executeQuery = function (res, query) {
        new sql.ConnectionPool(config.dbConfigSetting).connect().then((pool) => {
          return pool.request().query(query);
        }).then((data) => {
          let settingBasic = data.recordsets[0][0];
          let settingCustom = data.recordsets[0][1];
          let resultBasic = {
            "id": settingBasic.id,
            "theme_options": {
              "title_color": settingBasic.title_color,
              "background_color": settingBasic.background_color,
              "action_color": settingBasic.action_color,
              "content_color": settingBasic.content_color
            },
            "display_option": {
              "display_time": settingBasic.display_time,
              "delay_time": settingBasic.delay_time,
              "is_show_mobile": settingBasic.is_show_mobile,
              "mobile_position": settingBasic.mobile_position,
              "desktop_position": settingBasic.desktop_position
            },
            "type": settingBasic.type,
            "is_active": settingBasic.is_active
          }
          let resultCustom = {
            "id": settingCustom.id,
            "theme_options": {
              "title_color": settingCustom.title_color,
              "background_color": settingCustom.background_color,
              "action_color": settingCustom.action_color,
              "content_color": settingCustom.content_color
            },
            "display_option": {
              "display_time": settingCustom.display_time,
              "delay_time": settingCustom.delay_time,
              "is_show_mobile": settingCustom.is_show_mobile,
              "mobile_position": settingCustom.mobile_position,
              "desktop_position": settingCustom.desktop_position
            },
            "type": settingCustom.type,
            "is_active": settingCustom.is_active
          }
          let arrResultSettings = [resultBasic, resultCustom]
          sql.close()
          return res.status(200).json(arrResultSettings);
        }).catch((err) => {
          res.status(500).send({ message: `${err}` });
          sql.close();
        });
      }
      var query = "select * from [setting]";
      executeQuery(res, query)
    }
  },

  getOneRestaurantSetting: async (req, res) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');

    let link_restaurant = req.param('link_restaurant');
    if (link_restaurant) {
      let executeQuery = function (res, query) {
        new sql.ConnectionPool(config.dbConfigSetting).connect().then((pool) => {
          return pool.request().query(query);
        }).then((data) => {
          console.log(data);
          
          let result = data.recordsets[0][0];
          sql.close();
          return res.status(200).json(result);
        }).catch((err) => {
          res.status(500).send({
            message: `${err}`
          });
          sql.close();
        });
      }
      let query = `
              SELECT * FROM restaurant WHERE link_restaurant='${link_restaurant}'
            `
      executeQuery(res, query)
    } else {
      let restaurants = await RestaurantSetting.find();
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      return res.json(restaurants);
    }

  },


}