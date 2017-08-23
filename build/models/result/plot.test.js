"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var channel_1 = require("vega-lite/build/src/channel");
var mark_1 = require("vega-lite/build/src/mark");
var model_1 = require("compassql/build/src/model");
var schema_1 = require("compassql/build/src/schema");
var plot_1 = require("./plot");
var config_1 = require("compassql/build/src/config");
describe('models/plot', function () {
    var schema = new schema_1.Schema({ fields: [] });
    function buildSpecQueryModel(specQ) {
        return model_1.SpecQueryModel.build(specQ, schema, config_1.DEFAULT_QUERY_CONFIG);
    }
    function buildSpecQueryModelGroup(specQs) {
        var items = specQs.map(function (specQ) { return buildSpecQueryModel(specQ); });
        return {
            name: 'a name',
            path: 'path',
            items: items,
        };
    }
    describe('convertToPlotListWithKey', function () {
        it('converts SpecQueryGroup<SpecQueryModel> to ResultPlotWithKey[]', function () {
            var group = buildSpecQueryModelGroup([
                {
                    mark: mark_1.Mark.BAR,
                    encodings: [
                        { channel: channel_1.Channel.X }
                    ]
                }
            ]);
            var data = { url: 'a/data/set.csv' };
            var plotWithKey = plot_1.fromSpecQueryModelGroup(group, data);
            // should have a spec
            expect(plotWithKey[0].plot.spec).toEqual({
                data: { url: 'a/data/set.csv' },
                mark: 'bar',
                encoding: { x: {} },
                config: {
                    overlay: { line: true },
                    scale: { useUnaggregatedDomain: true }
                }
            });
        });
    });
});
//# sourceMappingURL=plot.test.js.map