import { FieldQuery } from 'compassql/build/src/query/encoding';
import { ExpandedType } from 'compassql/build/src/query/expandedtype';
import { Wildcard } from 'compassql/build/src/wildcard';
import { AggregateOp } from 'vega-lite/build/src/aggregate';
import { TimeUnit } from 'vega-lite/build/src/timeunit';
export declare type ShelfFunction = AggregateOp | 'bin' | TimeUnit | undefined;
export declare const AGGREGATE_INDEX: {
    [T: string]: boolean;
};
export declare function getSupportedFunction(type: ExpandedType): string[];
export declare function isShelfFunction(fn: string): fn is ShelfFunction;
export declare type FieldQueryFunctionMixins = Pick<FieldQuery, 'aggregate' | 'timeUnit' | 'bin' | 'hasFn'>;
export declare function toFieldQueryFunctionMixins(fn: ShelfFunction | Wildcard<ShelfFunction>): FieldQueryFunctionMixins;
export declare function fromFieldQueryFunctionMixins(fieldQParts: FieldQueryFunctionMixins): ShelfFunction | Wildcard<ShelfFunction>;
export declare function sortFunctions(fns: ShelfFunction[]): ShelfFunction[];
