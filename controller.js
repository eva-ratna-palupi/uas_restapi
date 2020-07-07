'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API ku berjalan yeee..",res)
};

//menampilkan semua data produk
exports.tampilsemuaproduk = function (req, res) {
    connection.query('SELECT * FROM tb_produk', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menambahkan data produk
exports.tambahproduk = function(req,res) {
    var nama = req.body.nama;
    var jumlah = req.body.jumlah;
    var harga = req.body.harga;

    connection.query('INSERT INTO tb_produk (nama,jumlah,harga) VALUES(?,?,?)',
    [nama,jumlah,harga],
    function (error,rows,fields)
    {
            if(error){
                console.log(error);
            }
            else{
                response.ok("Berhasil menambahkan data Produk",res)
            }
        });
};
