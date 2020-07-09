const jwt = require('jsonwebtoken');
const config = require('../config/secret');

function verifikasiAdmin(r){
    return function(req,rest,next){
        var level = r;
        //cek authorization header
        var tokenWithBearer = req.headers.authorization;
        if(tokenWithBearer){
            var token = tokenWithBearer.split(' ')[1];

            //verifikasi
            jwt.verify(token, config.secret, function(err,decoded){
                if(err){
                    return rest.status(401).send({auth:false,message:'Token tidak terdaftar!'});
                }else{
                    if(level == 1){
                        req.auth = decoded;
                        next();
                    }else{
                        return rest.status(401).send({auth:false,message:'Gagal mengotorisasi role anda!'});
                    }
                }
            });
        }else {
            return rest.status(401).send({auth:false,message:'Token tidak tersedia!'});
        }
        }
    }

module.exports = verifikasiAdmin;