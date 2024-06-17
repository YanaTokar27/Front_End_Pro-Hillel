const { request, response } = require('express');
const userModel = require('./login.model');

class UserController {
    loginUser = async (request, response) => {
        const loginRequest = request.body;
        const user = await userModel.findOne(loginRequest);
        if (user) {
            response.send({
                jwt: "hjchsjchsc"
            })
        } else {
            return response.status(401).send({
                message: 'Unauthorized'
            });
        }
    }
}


module.exports = new UserController();