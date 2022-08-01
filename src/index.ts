import isEven from 'is-even'
import { logger } from './log'

export function even(x: number) {
  return isEven(x)
}

logger.info('Hello World!')
