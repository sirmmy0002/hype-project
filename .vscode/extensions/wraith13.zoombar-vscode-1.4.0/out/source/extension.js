'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = exports.ZoomBar = void 0;
const vscode = __importStar(require("vscode"));
const vscel = __importStar(require("@wraith13/vscel"));
const package_json_1 = __importDefault(require("../package.json"));
const package_nls_json_1 = __importDefault(require("../package.nls.json"));
const package_nls_ja_json_1 = __importDefault(require("../package.nls.ja.json"));
const locale = vscel.locale.make(package_nls_json_1.default, { "ja": package_nls_ja_json_1.default });
var ZoomBar;
(function (ZoomBar) {
    const applicationKey = "zoombar-vscode";
    const hasWokspaceZoomLevel = () => {
        var _a;
        return undefined !== ((_a = vscode.workspace.getConfiguration("window")
            .inspect("zoomLevel")) === null || _a === void 0 ? void 0 : _a.workspaceValue);
    };
    const configurationTargetObject = Object.freeze({
        "auto": () => __awaiter(this, void 0, void 0, function* () {
            return !hasWokspaceZoomLevel();
        }),
        "global": () => __awaiter(this, void 0, void 0, function* () {
            if (hasWokspaceZoomLevel()) {
                yield vscode.workspace.getConfiguration("window").update("zoomLevel", undefined, false);
            }
            return true;
        }),
        "workspace": () => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            return ((_b = (_a = vscode.workspace.workspaceFolders) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) <= 0;
        }),
    });
    let Config;
    (function (Config) {
        Config.root = vscel.config.makeRoot(package_json_1.default);
        Config.defaultZoom = Config.root.makeEntry("zoombar.defaultZoom");
        Config.zoomUnit = Config.root.makeEntry("zoombar.zoomUnit");
        Config.preview = Config.root.makeEntry("zoombar.preview");
        Config.zoomPreset = Config.root.makeEntry("zoombar.zoomPreset");
        Config.zoomInLabel = Config.root.makeEntry("zoombar.zoomInLabel");
        Config.zoomOutLabel = Config.root.makeEntry("zoombar.zoomOutLabel");
        Config.fontZoomResetLabel = Config.root.makeEntry("zoombar.fontZoomResetLabel");
        Config.uiDisplayOrder = Config.root.makeEntry("zoombar.uiDisplayOrder");
        Config.configurationTarget = Config.root.makeMapEntry("zoombar.configurationTarget", configurationTargetObject);
    })(Config || (Config = {}));
    let previousUiDisplayOrder = "";
    let zoomLabel;
    let zoomOutLabel;
    let zoomInLabel;
    let fontZoomResetLabel;
    const cent = 100.0;
    const systemZoomUnit = 20.0;
    const systemZoomUnitRate = (systemZoomUnit + cent) / cent;
    const zoomLog = Math.log(systemZoomUnitRate);
    const distinctFilter = (value, index, self) => index === self.indexOf(value);
    let waitingSetZoomEntry = undefined;
    ZoomBar.setZoomLevel = (zoomLevel, wait = 500) => __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, rejct) => __awaiter(this, void 0, void 0, function* () {
            if (waitingSetZoomEntry) {
                clearTimeout(waitingSetZoomEntry.timer);
                waitingSetZoomEntry.rejct();
                waitingSetZoomEntry = undefined;
            }
            const timer = setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                const i = waitingSetZoomEntry;
                if (i) {
                    waitingSetZoomEntry = undefined;
                    try {
                        if (undefined !== i.zoomLevel) {
                            if ("number" === typeof i.zoomLevel) {
                                yield vscode.workspace.getConfiguration("window").update("zoomLevel", i.zoomLevel, yield Config.configurationTarget.get("")());
                            }
                            else {
                                const inspectResult = i.zoomLevel;
                                yield vscode.workspace.getConfiguration("window").update("zoomLevel", inspectResult.globalValue, true);
                                yield vscode.workspace.getConfiguration("window").update("zoomLevel", inspectResult.workspaceValue, false);
                            }
                        }
                        i.resolve();
                    }
                    catch (_c) {
                        i.rejct();
                    }
                }
            }), wait);
            waitingSetZoomEntry =
                {
                    zoomLevel,
                    resolve,
                    rejct,
                    timer,
                };
        }));
    });
    const getZoomLevel = () => { var _a, _b; return (_b = (_a = waitingSetZoomEntry === null || waitingSetZoomEntry === void 0 ? void 0 : waitingSetZoomEntry.zoomLevel) !== null && _a !== void 0 ? _a : vscode.workspace.getConfiguration("window")["zoomLevel"]) !== null && _b !== void 0 ? _b : 0.0; };
    const getZoomUnitLevel = () => ZoomBar.percentToLevel(cent + Config.zoomUnit.get(""));
    const getZoomPreset = () => Config.zoomPreset.get("")
        .filter(distinctFilter)
        .sort((a, b) => b - a);
    ZoomBar.initialize = (context) => {
        context.subscriptions.push(
        //  コマンドの登録
        vscode.commands.registerCommand(`${applicationKey}.selectZoom`, ZoomBar.selectZoom), vscode.commands.registerCommand(`${applicationKey}.resetZoom`, ZoomBar.resetZoom), vscode.commands.registerCommand(`${applicationKey}.zoomIn`, ZoomBar.zoomIn), vscode.commands.registerCommand(`${applicationKey}.zoomOut`, ZoomBar.zoomOut), 
        //  ステータスバーアイテムの登録
        zoomLabel = vscel.statusbar.createItem({
            alignment: vscode.StatusBarAlignment.Right,
            text: "zoom",
            command: `${applicationKey}.selectZoom`,
            tooltip: locale.map("zoombar-vscode.selectZoom.title")
        }), zoomInLabel = vscel.statusbar.createItem({
            alignment: vscode.StatusBarAlignment.Right,
            text: Config.zoomInLabel.get(""),
            command: `${applicationKey}.zoomIn`,
            tooltip: locale.map("zoombar-vscode.zoomIn.title")
        }), zoomOutLabel = vscel.statusbar.createItem({
            alignment: vscode.StatusBarAlignment.Right,
            text: Config.zoomOutLabel.get(""),
            command: `${applicationKey}.zoomOut`,
            tooltip: locale.map("zoombar-vscode.zoomout.title")
        }), fontZoomResetLabel = vscel.statusbar.createItem({
            alignment: vscode.StatusBarAlignment.Right,
            text: Config.fontZoomResetLabel.get(""),
            command: `editor.action.fontZoomReset`,
            tooltip: locale.map("zoombar-vscode.fontZoomReset.title")
        }), 
        //  イベントリスナーの登録
        vscode.workspace.onDidChangeConfiguration(event => {
            if (event.affectsConfiguration("zoombar") ||
                event.affectsConfiguration("window.zoomLevel")) {
                Config.root.entries.forEach(i => i.clear());
                ZoomBar.updateStatusBar();
            }
        }));
        ZoomBar.updateStatusBar();
    };
    ZoomBar.selectZoom = () => __awaiter(this, void 0, void 0, function* () {
        const backup = vscode.workspace.getConfiguration("window").inspect("zoomLevel");
        const currentZoomLevel = getZoomLevel();
        const currentZoom = ZoomBar.roundZoom(ZoomBar.levelToPercent(currentZoomLevel));
        const preview = Config.preview.get("");
        const rollback = () => __awaiter(this, void 0, void 0, function* () { return yield ZoomBar.setZoomLevel(backup); });
        yield vscel.menu.showQuickPick([
            {
                label: `$(home) ${locale.map("zoombar-vscode.selectZoom.resetZoom")} ( ${ZoomBar.percentToDisplayString(Config.defaultZoom.get(""))} )`,
                description: "",
                preview: () => __awaiter(this, void 0, void 0, function* () { return yield ZoomBar.setZoomLevel(ZoomBar.percentToLevel(Config.defaultZoom.get(""))); }),
            },
            {
                label: `${Config.fontZoomResetLabel.get("")} ${locale.map("zoombar-vscode.fontZoomReset.title")}`,
                description: locale.map("No preview"),
                command: () => __awaiter(this, void 0, void 0, function* () { return yield vscode.commands.executeCommand(`editor.action.fontZoomReset`); }),
            },
            {
                label: `$(pencil) ${locale.map("zoombar-vscode.selectZoom.inputZoom")}`,
                description: "",
                command: () => __awaiter(this, void 0, void 0, function* () {
                    vscel.menu.showInputBox({
                        prompt: locale.map("zoombar-vscode.inputZoom.placeHolder"),
                        value: currentZoom.toString(),
                        validateInput: input => {
                            const value = parseFloat(input);
                            if (!isFinite(value)) {
                                return locale.map("Must be a number.");
                            }
                            const maxUnit = 4.0;
                            const min = 100 / maxUnit;
                            const max = 100 * maxUnit;
                            if (!(min <= value && value <= max)) {
                                return `${locale.map("Range")}: ${min} - ${max}`;
                            }
                            return undefined;
                        },
                        preview,
                        command: (input) => __awaiter(this, void 0, void 0, function* () { return yield ZoomBar.setZoomLevel(ZoomBar.percentToLevel(parseFloat(input))); }),
                        onCancel: rollback,
                    });
                }),
            }
        ]
            .concat(getZoomPreset().map(i => ({
            label: `$(text-size) ${ZoomBar.percentToDisplayString(i)}`,
            description: currentZoom === ZoomBar.roundZoom(i) ? locale.map("zoombar-vscode.selectZoom.current") : "",
            preview: () => __awaiter(this, void 0, void 0, function* () { return yield ZoomBar.setZoomLevel(ZoomBar.percentToLevel(i)); }),
        }))), {
            placeHolder: locale.map("zoombar-vscode.selectZoom.placeHolder"),
            preview,
            rollback,
        });
    });
    ZoomBar.resetZoom = () => ZoomBar.setZoomLevel(ZoomBar.percentToLevel(Config.defaultZoom.get("")));
    ZoomBar.zoomOut = () => ZoomBar.setZoomLevel(getZoomLevel() - getZoomUnitLevel());
    ZoomBar.zoomIn = () => ZoomBar.setZoomLevel(getZoomLevel() + getZoomUnitLevel());
    ZoomBar.updateStatusBar = () => {
        const uiDisplayOrder = Config.uiDisplayOrder.get("");
        if (previousUiDisplayOrder !== uiDisplayOrder) {
            zoomLabel.hide();
            zoomInLabel.hide();
            zoomOutLabel.hide();
            fontZoomResetLabel.hide();
            previousUiDisplayOrder = uiDisplayOrder;
        }
        uiDisplayOrder
            .split("")
            .filter(distinctFilter)
            .reverse()
            .forEach(i => {
            switch (i) {
                case "%":
                    zoomLabel.text = ZoomBar.percentToDisplayString(ZoomBar.levelToPercent(getZoomLevel()));
                    zoomLabel.show();
                    break;
                case "+":
                    zoomInLabel.text = Config.zoomInLabel.get("");
                    zoomInLabel.show();
                    break;
                case "-":
                    zoomOutLabel.text = Config.zoomOutLabel.get("");
                    zoomOutLabel.show();
                    break;
                case "@":
                    fontZoomResetLabel.text = Config.fontZoomResetLabel.get("");
                    fontZoomResetLabel.show();
                    break;
            }
        });
    };
    ZoomBar.levelToPercent = (value) => Math.pow(systemZoomUnitRate, value) * cent;
    ZoomBar.percentToLevel = (value) => Math.log(value / cent) / zoomLog;
    ZoomBar.roundZoom = (value) => Math.round(value * cent) / cent;
    ZoomBar.percentToDisplayString = (value, locales) => `${ZoomBar.roundZoom(value / cent).toLocaleString(locales, { style: "percent" })}`;
})(ZoomBar = exports.ZoomBar || (exports.ZoomBar = {}));
exports.activate = (context) => ZoomBar.initialize(context);
exports.deactivate = () => { };
//# sourceMappingURL=extension.js.map