module.exports = async function (req, res, proceed) {
    if(req.session.account){
        return proceed();
    }else{
        const URL = sails.getUrlFor('HomeController.home');
        return res.redirect(URL);
    }
}