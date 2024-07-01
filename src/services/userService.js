const prisma = require('../prisma/client');

exports.getAllUsers = async () => {
    return await prisma.user.findMany();
};

exports.createUser = async (userData) => {
    return await prisma.user.create({
        data: userData,
    });
};
