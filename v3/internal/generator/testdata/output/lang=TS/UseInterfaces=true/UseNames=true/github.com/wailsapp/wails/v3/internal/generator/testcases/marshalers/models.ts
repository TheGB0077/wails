// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import * as encoding$0 from "../../../../../../../../encoding/models.js";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import * as json$0 from "../../../../../../../../encoding/json/models.js";

/**
 * any
 */
export type AliasJsonMarshaler = any;

/**
 * any
 */
export type AliasMarshaler = any;

/**
 * struct{}
 */
export interface AliasNonMarshaler {
}

/**
 * string
 */
export type AliasTextMarshaler = string;

export interface Data {
    "NM": NonMarshaler;

    /**
     * NonMarshaler | null
     */
    "NMPtr": NonMarshaler | null;
    "VJM": ValueJsonMarshaler;

    /**
     * ValueJsonMarshaler | null
     */
    "VJMPtr": ValueJsonMarshaler | null;
    "PJM": PointerJsonMarshaler;

    /**
     * PointerJsonMarshaler | null
     */
    "PJMPtr": PointerJsonMarshaler | null;
    "VTM": ValueTextMarshaler;

    /**
     * ValueTextMarshaler | null
     */
    "VTMPtr": ValueTextMarshaler | null;
    "PTM": PointerTextMarshaler;

    /**
     * PointerTextMarshaler | null
     */
    "PTMPtr": PointerTextMarshaler | null;
    "VM": ValueMarshaler;

    /**
     * ValueMarshaler | null
     */
    "VMPtr": ValueMarshaler | null;
    "PM": PointerMarshaler;

    /**
     * PointerMarshaler | null
     */
    "PMPtr": PointerMarshaler | null;
    "UJM": UnderlyingJsonMarshaler;

    /**
     * UnderlyingJsonMarshaler | null
     */
    "UJMPtr": UnderlyingJsonMarshaler | null;
    "UTM": UnderlyingTextMarshaler;

    /**
     * UnderlyingTextMarshaler | null
     */
    "UTMPtr": UnderlyingTextMarshaler | null;
    "UM": UnderlyingMarshaler;

    /**
     * UnderlyingMarshaler | null
     */
    "UMPtr": UnderlyingMarshaler | null;

    /**
     * any
     */
    "JM": any;

    /**
     * any | null
     */
    "JMPtr": any | null;

    /**
     * string
     */
    "TM": string;

    /**
     * string | null
     */
    "TMPtr": string | null;

    /**
     * any
     */
    "CJM": any;

    /**
     * any | null
     */
    "CJMPtr": any | null;

    /**
     * string
     */
    "CTM": string;

    /**
     * string | null
     */
    "CTMPtr": string | null;

    /**
     * any
     */
    "CM": any;

    /**
     * any | null
     */
    "CMPtr": any | null;
    "ANM": AliasNonMarshaler;

    /**
     * AliasNonMarshaler | null
     */
    "ANMPtr": AliasNonMarshaler | null;
    "AJM": AliasJsonMarshaler;

    /**
     * AliasJsonMarshaler | null
     */
    "AJMPtr": AliasJsonMarshaler | null;
    "ATM": AliasTextMarshaler;

    /**
     * AliasTextMarshaler | null
     */
    "ATMPtr": AliasTextMarshaler | null;
    "AM": AliasMarshaler;

    /**
     * AliasMarshaler | null
     */
    "AMPtr": AliasMarshaler | null;
    "ImJM": ImplicitJsonMarshaler;

    /**
     * ImplicitJsonMarshaler | null
     */
    "ImJMPtr": ImplicitJsonMarshaler | null;
    "ImTM": ImplicitTextMarshaler;

    /**
     * ImplicitTextMarshaler | null
     */
    "ImTMPtr": ImplicitTextMarshaler | null;
    "ImM": ImplicitMarshaler;

    /**
     * ImplicitMarshaler | null
     */
    "ImMPtr": ImplicitMarshaler | null;
    "ImNJ": ImplicitNonJson;

    /**
     * ImplicitNonJson | null
     */
    "ImNJPtr": ImplicitNonJson | null;
    "ImNT": ImplicitNonText;

    /**
     * ImplicitNonText | null
     */
    "ImNTPtr": ImplicitNonText | null;
    "ImNM": ImplicitNonMarshaler;

    /**
     * ImplicitNonMarshaler | null
     */
    "ImNMPtr": ImplicitNonMarshaler | null;
    "ImJbT": ImplicitJsonButText;

    /**
     * ImplicitJsonButText | null
     */
    "ImJbTPtr": ImplicitJsonButText | null;
    "ImTbJ": ImplicitTextButJson;

    /**
     * ImplicitTextButJson | null
     */
    "ImTbJPtr": ImplicitTextButJson | null;
}

/**
 * any
 */
export type ImplicitJsonButText = any;

/**
 * any
 */
export type ImplicitJsonMarshaler = any;

/**
 * any
 */
export type ImplicitMarshaler = any;

/**
 * string
 */
export type ImplicitNonJson = string;

/**
 * class{ Marshaler, TextMarshaler }
 */
export interface ImplicitNonMarshaler {
    "Marshaler": json$0.Marshaler;
    "TextMarshaler": encoding$0.TextMarshaler;
}

/**
 * any
 */
export type ImplicitNonText = any;

/**
 * any
 */
export type ImplicitTextButJson = any;

/**
 * string
 */
export type ImplicitTextMarshaler = string;

/**
 * class {}
 */
export interface NonMarshaler {
}

/**
 * any
 */
export type PointerJsonMarshaler = any;

/**
 * any
 */
export type PointerMarshaler = any;

/**
 * string
 */
export type PointerTextMarshaler = string;

/**
 * any
 */
export type UnderlyingJsonMarshaler = any;

/**
 * any
 */
export type UnderlyingMarshaler = any;

/**
 * string
 */
export type UnderlyingTextMarshaler = string;

/**
 * any
 */
export type ValueJsonMarshaler = any;

/**
 * any
 */
export type ValueMarshaler = any;

/**
 * string
 */
export type ValueTextMarshaler = string;
