/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex } from "@aws-amplify/ui-react";
export default function Login(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Login")}
      {...rest}
    >
      <Flex
        width="550px"
        height="60px"
        {...getOverrideProps(overrides, "Login5723")}
      ></Flex>
    </Flex>
  );
}
