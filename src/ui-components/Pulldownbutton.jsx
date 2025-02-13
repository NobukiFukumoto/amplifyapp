/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Pulldownbutton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "\u691C\u7D22\u5BFE\u8C61": {},
        "arrow-down": {},
        Pulldownbutton: {},
      },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        "\u691C\u7D22\u5BFE\u8C61": {},
        "arrow-down": {},
        Pulldownbutton: {
          height: "60px",
          backgroundColor: "rgba(219,219,219,1)",
        },
      },
      variantValues: {},
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="207px"
      height="57px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      borderRadius="10px"
      padding="9px 9px 9px 9px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "Pulldownbutton")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="21.784090042114258px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="検索対象"
        {...getOverrideProps(overrides, "\u691C\u7D22\u5BFE\u8C61")}
      ></Text>
      <View
        width="22px"
        height="23px"
        {...getOverrideProps(overrides, "arrow-down")}
      ></View>
    </Flex>
  );
}
