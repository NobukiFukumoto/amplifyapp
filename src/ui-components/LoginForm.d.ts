/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { LoginProps } from "./Login";
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
export declare type LoginFormOverridesProps = {
    LoginForm?: PrimitiveOverrideProps<ViewProps>;
    Register?: LoginProps;
    Login?: LoginProps;
    "Forgot Password"?: PrimitiveOverrideProps<FlexProps>;
    "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5FD8\u308C\u307E\u3057\u305F\u304B\uFF1F"?: PrimitiveOverrideProps<TextProps>;
    Password?: PrimitiveOverrideProps<FlexProps>;
    "Email address"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    "\u30ED\u30B0\u30A4\u30F3"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LoginFormProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LoginFormOverridesProps | undefined | null;
}>;
export default function LoginForm(props: LoginFormProps): React.ReactElement;
