import React, { useState } from "react";
import { Button, Flex, Heading, View } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

const Header = ({ signOut, user }) => {
  const navigation = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View padding="1rem" backgroundColor="lightgray">
      <Flex justifyContent="space-between" alignItems="center" position="relative">
        <Heading level={1}>Cino</Heading>
        
        <Flex alignItems="center" gap="1rem">
          {/* Create Note ボタン */}
          <Button onClick={() => navigation("/create")} variation="primary">
            Create Note
          </Button>

          {/* ユーザー名（クリックでログアウトメニュー表示） */}
          <View position="relative">
            <Button variation="link" onClick={() => setMenuOpen(!menuOpen)}>
              {user?.username}
            </Button>

            {/* ログアウトボタン（はみ出さないよう調整） */}
            {menuOpen && (
              <View
                position="absolute"
                top="100%"
                right="0"
                backgroundColor="white"
                padding="0.5rem"
                boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
                zIndex="10"
                borderRadius="5px"
                minWidth="100px"
                maxWidth="200px"
                overflow="hidden"
                whiteSpace="nowrap"
              >
                <Button variation="link" onClick={signOut} width="100%">
                  Logout
                </Button>
              </View>
            )}
          </View>
        </Flex>
      </Flex>
    </View>
  );
};

export default Header;
