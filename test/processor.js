import {unified} from 'unified'
import parse from '../index.js'
import stringify from 'rehype-stringify'
export const rehype=unified().use(parse).use(stringify).freeze()
