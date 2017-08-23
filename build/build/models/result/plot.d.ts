import { SpecQueryModelGroup } from 'compassql/build/src/model';
import { Data } from 'vega-lite/build/src/data';
import { FacetedCompositeUnitSpec } from 'vega-lite/build/src/spec';
import { ShelfFieldDef } from '../shelf';
export interface PlotFieldInfo {
    fieldDef: ShelfFieldDef;
    isEnumeratedWildcardField: boolean;
}
export interface ResultPlot {
    fieldInfos: PlotFieldInfo[];
    spec: FacetedCompositeUnitSpec;
}
export interface ResultPlotWithKey {
    plot: ResultPlot;
    groupByKey: string;
}
export declare function fromSpecQueryModelGroup(modelGroup: SpecQueryModelGroup, data: Data): ResultPlotWithKey[];
