import RedisSMQ from 'rsmq'
const rsmq = new RedisSMQ({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT, ns: "rsmq" });
rsmq.createQueue({ qname: process.env.MESSAGE_QUEUE_NAME }, function (error, resp) {
    if (error) {
        console.error(error)
        process.env.exit(1)
    }
    if (resp === 1) {
        console.log("queue created")
    }
});

export default rsmq