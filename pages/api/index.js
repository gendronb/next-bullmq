
const { Queue } = require('bullmq')
const IORedis = require('ioredis')

const REDIS_URL = 'redis://:pdaf3a6bcccd04cfc6bc0673b62899600939fb3b7234b53b39e3df5640c1b560b@ec2-54-80-61-81.compute-1.amazonaws.com:21569'

export default async function handler (req, res) {

  const connection = new IORedis(REDIS_URL)
  const queue = new Queue('test', { connection })

  await queue.add('test', { param: Math.random() })

  res.status(200).json({ status: 'ok' })

}
