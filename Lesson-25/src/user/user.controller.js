const { request, response } = require('express');
const userModel = require('./user.model');

class UserController {
    getUsers = async (request, response) => {
        const users = await userModel.findAll();

        response.send(users);
    }

    // loginUser = () => {
    //     const { body } = request;
    //     response.send({
    //         jwt: 'hcdjhfdjhf'
    //     })
    // }

    getUser = async (request, response) => {
        const { userId } = request.params;
        // const id = request.params.userId //віріант 2
        const user = await userModel.findOne(userId);

        response.send(user);
    }

    createUser = async (request, response) => {
        const { body } = request;
        const user = await userModel.createOne(body);

        response.send(user);
    }

    deleteUser = async (request, response) => {
        const { userId } = request.params;
        await userModel.deleteOne(userId);

        response.send('Successfully deleted');
    }

    updateUser = async (request, response) => {
        const { userId } = request.params;
        const { body } = request;
        const user = await userModel.updateOne(userId, body);

        response.send(user);
    }
}

module.exports = new UserController();