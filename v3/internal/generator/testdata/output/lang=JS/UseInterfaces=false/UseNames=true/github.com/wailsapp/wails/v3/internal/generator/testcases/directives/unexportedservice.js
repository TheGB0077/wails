// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

/**
 * An unexported service.
 * @module
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import {Call as $Call, Create as $Create} from "/wails/runtime.js";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import * as $models from "./models.js";

/**
 * @param {$models.unexportedModel} $0
 * @returns {Promise<void> & { cancel(): void }}
 */
export function Method($0) {
    let $resultPromise = /** @type {any} */($Call.ByName("main.unexportedService.Method", $0));
    return $resultPromise;
}
