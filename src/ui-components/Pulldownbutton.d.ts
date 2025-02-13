/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PulldownbuttonOverridesProps = {
    Pulldownbutton?: PrimitiveOverrideProps<FlexProps>;
    "\u691C\u7D22\u5BFE\u8C61"?: PrimitiveOverrideProps<TextProps>;
    "arrow-down"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type PulldownbuttonProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default";
} & {
    overrides?: PulldownbuttonOverridesProps | undefined | null;
}>;
export default function Pulldownbutton(props: PulldownbuttonProps): React.ReactElement;
