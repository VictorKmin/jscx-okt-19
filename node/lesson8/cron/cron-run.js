const cron = require('node-cron');

const calculateStatisticCron = require('./calculdate-statistic.cron');
const {CRON_JOB_PERIOD} = require('../config');

module.exports = () => {
  cron.schedule(CRON_JOB_PERIOD, async () => {
    console.log(`CRON JOB STARTED AT ${new Date().toISOString()}`)

    try {
      await calculateStatisticCron();
    } catch (e) {
      console.log(`CRON JOB FINISHED AT ${new Date().toISOString()} \n ${JSON.stringify(e, null, 2)}`)
    }

    console.log(`CRON JOB FINISHED AT ${new Date().toISOString()}`)
  })
}
