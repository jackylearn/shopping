const mongoose = require('mongoose')

const { MongoMemoryServer } = require('mongodb-memory-server')
let memoryServer;

module.exports.connect = async () => {
    memoryServer = await MongoMemoryServer.create()
    const uri = memoryServer.getUri();
    await mongoose.connect(uri, { useNewUrlParser: true, useFindAndModify: false })
    mongoose.connection.once('open', () => console.log('connected to memory server'))
    mongoose.connection.on('error', (err) => console.error('connected to memory server', err))
}

module.exports.disconnect = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await memoryServer.stop();
}

module.exports.clearDatabase = async () => {
    const collections = mongoose.connection.collections;
    for (let key in collections) {
        const collection = collections[key];
        await collection.deleteMany()
    }
}