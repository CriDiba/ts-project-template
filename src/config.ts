import dotenv from 'dotenv'
import { TLogLevelName } from 'tslog'

dotenv.config()

export const LOG_LEVEL = (process.env.LOG_LEVEL as TLogLevelName) ?? 'info'
