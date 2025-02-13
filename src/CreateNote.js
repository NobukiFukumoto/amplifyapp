// src/CreateNote.js
import React, { useState } from "react";
import { Button, Flex, TextField, View } from "@aws-amplify/ui-react";
import { createNote as createNoteMutation } from "./graphql/mutations";
import { generateClient } from 'aws-amplify/api';
import { useNavigate } from "react-router-dom";
import Header from "./Header"; // Headerコンポーネントをインポート
import { signOut } from '@aws-amplify/auth'; // signOutをインポート

const client = generateClient();

const CreateNote = () => {
  const [formData, setFormData] = useState({
    date: "",
    customerRepresentative: "",
    customer: "",
    title: "",
    content: "",
  });
  const navigation = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await client.graphql({
      query: createNoteMutation,
      variables: { input: formData },
    });
    navigation("/"); // Redirect to the Notes List page after submission
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigation("/"); // ログアウト後にログインページへ遷移
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <View as="form" margin="0" onSubmit={handleSubmit}>
      <Header signOut={handleSignOut} /> {/* ヘッダーにsignOutを渡す */}
      <Flex direction="column" justifyContent="center" alignItems="center">
        <TextField name="date" type="date" label="日付" onChange={handleChange} value={formData.date} required />
        <TextField name="customerRepresentative" label="顧客先担当者" onChange={handleChange} value={formData.customerRepresentative} required />
        <TextField name="customer" label="顧客名" onChange={handleChange} value={formData.customer} required />
        <TextField name="title" label="タイトル" onChange={handleChange} value={formData.title} required />
        <TextField name="content" label="内容" onChange={handleChange} value={formData.content} required />
        <Button type="submit" variation="primary">
          Create Note
        </Button>
        <Button onClick={() => navigation("/")} variation="secondary">
          Back to Main Page
        </Button>
      </Flex>
    </View>
  );
};

export default CreateNote;
