module.exports = {
  
    admin: (req, res) =>{    
        return res.view('pages/admin', {layout: 'layouts/admin'});
    },

};
 
