
const { Queue } = require('bullmq')
const IORedis = require('ioredis')

export default async function handler (req, res) {

  const connection = new IORedis(process.env.REDIS_URL)
  const queue = new Queue('test', { connection })

  await queue.add('test', { param: Math.random() })

  res.status(200).json({ status: 'ok' })

}
