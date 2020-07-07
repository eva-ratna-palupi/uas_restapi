'use strict';

module.exports= function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampilproduk')
        .get(jsonku.tampilsemuaproduk);
    
    app.route('/tambahproduk')
        .post(jsonku.tambahproduk);
    
    app.route('/ubahproduk')
        .put(jsonku.ubahproduk);

    app.route('/hapusproduk')
        .delete(jsonku.hapusproduk);
}