import { GenericState, UndoableStateBase } from '../models/index';
import { Query } from 'compassql/build/src/query/query';
import { SpecQuery } from 'compassql/build/src/query/spec';
import { ShelfFilter } from '../models/shelf/filter';
import { Shelf, ShelfGroupBy } from '../models/shelf/index';
import { ShelfUnitSpec } from '../models/shelf/spec';
export declare const selectShelf: (state: GenericState<UndoableStateBase>, props?: any) => Shelf;
export declare const selectShelfGroupBy: (state: GenericState<UndoableStateBase>, props?: any) => ShelfGroupBy;
export declare const selectShelfSpec: (state: GenericState<UndoableStateBase>, props?: any) => ShelfUnitSpec;
export declare const selectFilters: (state: GenericState<UndoableStateBase>, props?: any) => ShelfFilter[];
export declare const selectShelfAutoAddCount: (state: GenericState<UndoableStateBase>, props?: any) => boolean;
export declare const selectQuery: (state: GenericState<UndoableStateBase>, props?: any) => Query;
export declare const selectQuerySpec: (state: GenericState<UndoableStateBase>, props?: any) => SpecQuery;
export declare const selectDefaultGroupBy: (state: GenericState<UndoableStateBase>, props?: any) => "field" | "fieldTransform" | "encoding";
export declare const selectIsQuerySpecific: (state: GenericState<UndoableStateBase>, props?: any) => boolean;
export declare const selectIsQueryEmpty: (state: GenericState<UndoableStateBase>, props?: any) => boolean;
