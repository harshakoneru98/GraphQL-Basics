const { UserList } = require('../FakeData');

const resolvers = {
    Query: {
        users() {
            return UserList;
        }
    }
};

module.exports = { resolvers };
