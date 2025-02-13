import React, { useState } from 'react';
import {
  Button,
  TextField,
  Flex,
  Heading,
  View,
  Link
} from "@aws-amplify/ui-react";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <div className="lang-switch">
          <Link href="#">日本語</Link> | <Link href="#">English</Link>
        </div>
      </header>
      <main className="login-main">
        <div className="title-container">
          <h1>営業報告システム</h1>
          <h2>-PINO-</h2>
        </div>
        <div className="login-form-container">
          <Heading level={2}>ログイン</Heading>
          <form className="login-form">
            <TextField
              name="email"
              placeholder="メールアドレスを入力"
              label="メールアドレス"
              labelHidden
              variation="quiet"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              name="password"
              placeholder="パスワードを入力"
              label="パスワード"
              labelHidden
              variation="quiet"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </Button>
            <Button type="submit" variation="primary">
              ログイン
            </Button>
          </form>
          <Flex direction="column" alignItems="flex-start">
            <Link href="#">パスワードを忘れましたか?</Link>
            <Link href="#">新規登録</Link>
          </Flex>
        </div>
      </main>
    </div>
  );
};

export default Login;