import React, { useState, useEffect, useCallback } from "react";
import { Button, Flex, TextField, View } from "@aws-amplify/ui-react";
import { generateClient } from 'aws-amplify/api';
import { useNavigate, useParams } from "react-router-dom";
import { getNote } from "./graphql/queries";  // クエリとしてインポート
import { updateNote as updateNoteMutation, deleteNote as deleteNoteMutation } from "./graphql/mutations";
import Header from "./Header"; // Headerコンポーネントをインポート
import { signOut } from '@aws-amplify/auth'; // signOutをインポート

const client = generateClient();

const EditNote = () => {
  const [formData, setFormData] = useState({
    date: "",
    customerRepresentative: "",
    customer: "",
    title: "",
    content: ""
  });
  const navigation = useNavigate();
  const { id } = useParams(); // URLからIDを取得

  // Note情報を取得 (useCallbackでメモ化)
  const fetchNote = useCallback(async () => {
    const apiData = await client.graphql({
      query: getNote,  // getNoteクエリを使用
      variables: { id },
    });
    setFormData(apiData.data.getNote);
  }, [id]);  // idが変わったときに再実行

  useEffect(() => {
    fetchNote();
  }, [fetchNote]); // fetchNoteを依存配列に追加

  // フォームの変更処理
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Noteを保存
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await client.graphql({
        query: updateNoteMutation,
        variables: {
          input: {
            id,  // 必ず id を渡す
            ...formData  // フォームデータを展開して渡す
          }
        }
      });
      console.log("Update response:", response);
      navigation(`/`); // 更新が成功したらトップページに遷移
    } catch (error) {
      console.error("Error updating note: ", error);
      alert(`Update failed: ${error.message || error}`);
    }
  };

  const handleDelete = async () => {
    await client.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } }
    });
    navigation(`/`); // 削除後にトップページに遷移
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigation("/"); // ログアウト後にログインページへ遷移
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  // メインページに戻る処理
  const handleBackToMain = () => {
    navigation("/"); // トップページに遷移
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
          Update Note
        </Button>
        <Button type="button" variation="danger" onClick={handleDelete}>
          Delete Note
        </Button>
        <Button type="button" variation="secondary" onClick={handleBackToMain}>
          Back to Main Page
        </Button>
      </Flex>
    </View>
  );
};

export default EditNote;
