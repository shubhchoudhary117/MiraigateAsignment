const jsonwebtoken = require("jsonwebtoken");
const UserModel = require("../../models/AuthModels/User.js")
const Protect = async (req, res, next) => {
    console.log(req.headers)
    let token = "";
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")) {
        try {
            console.log(req.headers.authorization)
            console.log(req.headers.authorization)
            token = req.headers.authorization.split(" ")[1];
            let decoded = jsonwebtoken.verify(token, process.env.SECRETE_KEY);
            if (decoded) {
                req.user = decoded.user;
                next();
            } else {
                return res.status(401).json({ badcradintals: true, authorization: false });
            }
        } catch (error) {
            conssle.log(error)
            res.status(401).json({ badcradintals: true, authorization: false });

        }
    } else {
        res.status(401).json({ badcradintals: true, authorization: false });
    }
}

module.exports = { Protect }