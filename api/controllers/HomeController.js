const SQL = require('mssql');
const BCRYPT = require('bcrypt');
const CODE_REGISTER = 'pasgo.vn';
const DB = require('./../../config/env/dbconfig');
module.exports = {
    home: (req, res) => {
        let notify = null;
        if (req.method === 'POST') {
            let infoAccount = {
                email: req.body.email,
                pwd: req.body.pwd,
                reb: req.body.remember
            }
            let executeQuery = function (res, query) {
                new SQL.ConnectionPool(DB.dbConfigSetting).connect().then((pool) => {
                    return pool.request().query(query);
                }).then((data) => {
                    let objData = data.recordset[0];
                    let password = BCRYPT.compareSync(infoAccount.pwd, objData.Password);
                    if (objData !== 'undefined') {
                        if (password) {
                            req.session.account = objData;
                            if(infoAccount.reb === 'on'){
                                res.cookie('username', infoAccount.email, {maxAge: 604800000});
                                res.cookie('password', infoAccount.pwd, {maxAge: 604800000});
                            }
                            SQL.close();
                            const URL = sails.getUrlFor('AdminController.admin');
                            return res.redirect(URL);
                        } else {
                            SQL.close();
                            notify = 'Đăng nhập không thành công';
                            return res.view('pages/login', {layout: 'layouts/home', notify: notify});
                        }
                    } else {
                        SQL.close();
                        notify = 'Đăng nhập không thành công';
                        return res.view('pages/login', {layout: 'layouts/home', notify: notify});
                    }
                }).catch((err) => {
                    SQL.close();
                    notify = 'Đăng nhập không thành công';
                    return res.view('pages/login', {layout: 'layouts/home', notify: notify});
                });
            }
            let query = `select * from Account where Email = '${infoAccount.email}'`;
            executeQuery(res, query);
        } else {
            return res.view('pages/login', {layout: 'layouts/home', notify: notify});
        }

    },
    register: (req, res) => {
        let notify = null;
        if (req.method === 'POST') {
            let executeQuery = function (res, query) {
                new SQL.ConnectionPool(DB.dbConfigSetting).connect().then((pool) => {
                    return pool.request().query(query);
                }).then((data) => {
                    SQL.close();
                    let objData = data.recordset[0];
                    req.session.account = objData;
                    const URL = sails.getUrlFor('AdminController.admin');
                    return res.redirect(URL);
                }).catch((err) => {
                    SQL.close();
                    notify = 'Đăng ký lỗi vui lòng thử lại';
                    return res.view('pages/register', {
                        layout: 'layouts/home',
                        notify: notify
                    });
                });
            }
            let infoAccount = {
                account: req.body.account,
                email: req.body.email,
                pwd: req.body.pwd,
                rePwd: req.body.repwd,
                codeAuth: req.body.auth
            }
            if (infoAccount.rePwd !== infoAccount.pwd) {
                notify = 'Mật khẩu không khớp';
                return res.view('pages/register', {
                    layout: 'layouts/home',
                    notify: notify
                });
            } else if (infoAccount.codeAuth !== CODE_REGISTER) {
                notify = 'Mã đăng ký không trùng khớp';
                return res.view('pages/register', {
                    layout: 'layouts/home',
                    notify: notify
                });
            } else {
                let password = BCRYPT.hashSync(infoAccount.pwd, 10);
                let query = `insert into Account (UserName, Email, Password) values ('${infoAccount.account}','${infoAccount.email}','${password}')
                            SELECT * FROM Account WHERE id = SCOPE_IDENTITY()`;
                executeQuery(res, query);
            }
        } else {
            return res.view('pages/register', {
                layout: 'layouts/home',
                notify: notify
            });
        }
    },
    logout: (req, res)=>{
        let notify = null;
        if(req.session.account){
            delete req.session.account;
        }
        notify = 'Đăng xuất thành công';
        return res.view('pages/login', {layout: 'layouts/home', notify: notify});
    }
};
