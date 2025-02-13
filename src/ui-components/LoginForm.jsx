/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Login from "./Login";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function LoginForm(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="555px"
      height="532px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "LoginForm")}
      {...rest}
    >
      <Login
        display="flex"
        gap="0"
        direction="row"
        width="550px"
        height="60px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="88.72%"
        bottom="0%"
        left="0.9%"
        right="0%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Register")}
      ></Login>
      <Login
        display="flex"
        gap="0"
        direction="row"
        width="550px"
        height="60px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="70.86%"
        bottom="17.86%"
        left="0.9%"
        right="0%"
        border="1px SOLID rgba(255,255,255,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Login")}
      ></Login>
      <Flex
        gap="10px"
        direction="row"
        width="228px"
        height="39px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="56.95%"
        bottom="35.71%"
        left="58.74%"
        right="0.18%"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Forgot Password")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,119,255,1)"
          lineHeight="19.363636016845703px"
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
          children="パスワードを忘れましたか？"
          {...getOverrideProps(
            overrides,
            "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5FD8\u308C\u307E\u3057\u305F\u304B\uFF1F"
          )}
        ></Text>
      </Flex>
      <Flex
        width="555px"
        height="64px"
        {...getOverrideProps(overrides, "Password")}
      ></Flex>
      <Flex
        width="555px"
        height="64px"
        {...getOverrideProps(overrides, "Email address")}
      ></Flex>
      <Flex
        gap="10px"
        direction="row"
        width="180px"
        height="68px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0%"
        bottom="87.22%"
        left="30.45%"
        right="37.12%"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Title")}
      >
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="700"
          color="rgba(106,176,255,1)"
          lineHeight="48.409088134765625px"
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
          children="ログイン"
          {...getOverrideProps(overrides, "\u30ED\u30B0\u30A4\u30F3")}
        ></Text>
      </Flex>
    </View>
  );
}
