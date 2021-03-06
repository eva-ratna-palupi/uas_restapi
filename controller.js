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

//mengubah data berdasarkan id
exports.ubahproduk = function (req, res) {
    var id_produk = req.body.id_produk;
    var nama = req.body.nama;
    var jumlah = req.body.jumlah;
    var harga = req.body.harga;

    connection.query('UPDATE tb_produk SET nama=?, jumlah=?, harga=? WHERE id_produk=?', [nama,jumlah,harga,id_produk],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data Produk", res)
            }
        });
}

//menghapus data produk berdasarkan id
exports.hapusproduk = function (req, res) {
    var id = req.body.id_produk;
    connection.query('DELETE FROM tb_produk WHERE id_produk=?',[id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data Produk", res)
            }
        });
}
