import {unified} from 'unified';
import parse, {type Options} from '../index.js';
const options: Options={fragment:true,space:'svg',verbose:true,emitParseErrors:true};
unified().use(parse,options).parse('<svg><path /></svg>');
// @ts-expect-error: only HTML and SVG spaces are supported.
const invalid: Options={space:'mathml'};
// @ts-expect-error: verbose requires a boolean.
const invalidVerbose: Options={verbose:'yes'};
void invalid;void invalidVerbose;
