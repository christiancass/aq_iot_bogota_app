const jwt = require('jsonwebtoken');

let checkAuth = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, 'd5PJ5RhiS2iQt7JX^EC7"tg5=@1@h<5', (err, decoded) => {

        if (err){
            return res.status(401).json({
              status: "error",
              error: err  
            });
        }

        req.userData = decoded.userData;

        next();

    });

}

module.exports = {checkAuth}