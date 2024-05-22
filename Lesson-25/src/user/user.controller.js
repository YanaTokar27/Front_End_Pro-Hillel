class UserController {
    getUser = (request, response) => {
        const { userId } = request.params
        // const id = request.params.userId //віріант 2

        response.send(userId);
    }
}

module.exports = new UserController();