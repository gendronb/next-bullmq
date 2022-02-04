
const Queue = require('bull')
const testQueue = new Queue('test', process.env.REDIS_URL);

export default async function handler (req, res) {

  await testQueue.add('test', { param: Math.random() })
  res.status(200).json({ status: 'ok' })

}
