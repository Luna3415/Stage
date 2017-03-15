define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by KimG on 14/03/2017.
     */
    var ChessBoardConstants = (function () {
        function ChessBoardConstants() {
        }
        ChessBoardConstants.initialize = function (height) {
            this.blockSize = height / this.NUMBER_OF_ROWS;
        };
        Object.defineProperty(ChessBoardConstants, "BLOCK_SIZE", {
            get: function () { return this.blockSize; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChessBoardConstants, "NUMBER_OF_ROWS", {
            get: function () { return 8; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChessBoardConstants, "NUMBER_OF_COLS", {
            get: function () { return 8; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChessBoardConstants, "BLOCK_COLOUR_1", {
            get: function () { return "#808080"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChessBoardConstants, "BLOCK_COLOUR_2", {
            get: function () { return "#ffffff"; },
            enumerable: true,
            configurable: true
        });
        return ChessBoardConstants;
    }());
    exports.ChessBoardConstants = ChessBoardConstants;
});
//# sourceMappingURL=chessBoardConstants.js.map