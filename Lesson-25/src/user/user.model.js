let users = [
    {
        id: 99,
        name: 'User',
        age: 15
    }
]

class userModel {
    findAll = () => {
        return new Promise(resolve => resolve(users))
    }

    findOne = (id) => {
        const user = users.find(user => user.id === +id);

        return new Promise(resolve => resolve(user))
    }

    createOne = (body) => {
        const { id: lastUserId } = users.at(-1);
        users.push({
            id: lastUserId + 1,
            ...body
        })

        return new Promise((resolve) => resolve({
            id: lastUserId + 1,
            ...body
        }))
    }

    deleteOne = (id) => {
        const newUsers = users.filter(user => user.id !== +id);
        console.log(newUsers);
        users = newUsers;
        return new Promise((resolve) => resolve({
            message: 'ok'
        })
        )
    }

    updateOne = (id, body) => {
        const idUserToUpdate = users.findIndex(user => user.id === +id);
        users[idUserToUpdate] = {
            ...users[idUserToUpdate],   //дістаємо усі ключі які є
            ...body           //в тих полях, що повторюються, апдейтимо дані
        }

        return new Promise((resolve) => resolve(users[idUserToUpdate]))
    }
}


module.exports = new userModel();