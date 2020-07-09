var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verifikasi = require('./verifikasi');
var verifikasiAdmin = require('./verifikasiAdmin');
var jsonku = require('../controller')

//daftarkan menu registrasi
router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);

//alamat yang perlu otorisasi
router.get('/api/v1/rahasia', verifikasi(2), auth.halamanrahasia);

router.post('/api/v1/tambah-produk', verifikasiAdmin(1), jsonku.tambahproduk);
router.put('/api/v1/ubah-produk', verifikasiAdmin(1), jsonku.ubahproduk);
router.delete('/api/v1/hapus-produk', verifikasiAdmin(1), jsonku.hapusproduk);



module.exports = router;