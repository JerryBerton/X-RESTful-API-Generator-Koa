/**
 * Created by OXOYO on 2017/10/23.
 */

import Sequelize from 'sequelize'
import { DB as DBConfig } from './config'

const db = new Sequelize(
  DBConfig.database,
  DBConfig.username,
  DBConfig.password,
  {
    host: DBConfig.host,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 30000
    },
    define: {
      timestamp: false
    }
  }
)

export default db
