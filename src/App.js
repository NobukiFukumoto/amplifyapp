import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listNotes } from "./graphql/queries";
import { useNavigate } from "react-router-dom";
import { generateClient } from 'aws-amplify/api';
import Login from "./Login";
import Header from "./Header"; // Headerコンポーネントをインポート

const client = generateClient();
const ITEMS_PER_PAGE = 8;

const App = ({ signOut, user }) => {
  const [notes, setNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("customer"); // デフォルトの検索対象を「顧客名」に設定
  const [filteredNotes, setFilteredNotes] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await client.graphql({ query: listNotes });
    const sortedNotes = apiData.data.listNotes.items.sort((a, b) => {
      // createdAtを使って降順に並べ替え（最新のノートが一番上）
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setNotes(sortedNotes);
    setFilteredNotes(sortedNotes); // 初期は全ノートを表示
  }

  // 検索ボタンがクリックされたときにフィルタリング
  const handleSearch = () => {
    const newFilteredNotes = notes.filter(note => {
      if (searchBy === "customer") {
        return note.customer.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (searchBy === "content") {
        return note.content.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (searchBy === "id") {
        return note.id.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (searchBy === "date") {
        return note.date.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return true;
    });
    setFilteredNotes(newFilteredNotes);
    setCurrentPage(1); // 検索後は最初のページに戻す
  };

  const totalPages = Math.ceil(filteredNotes.length / ITEMS_PER_PAGE);
  const displayedNotes = filteredNotes.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE + 1; // 1から始まるインデックス
  const endIndex = Math.min(currentPage * ITEMS_PER_PAGE, filteredNotes.length); // 現在ページの最後のインデックス

  return (
    <View className="App">
      {user ? (
        <>
          <Header signOut={signOut} user={user} />  {/* ヘッダーにユーザー情報を渡す */}
          
          {/* ノート一覧のタイトル、検索フォーム、プルダウンリスト */}
          <Flex direction="row" justifyContent="space-between" alignItems="center" margin="1rem 0">
            <Heading level={4}>営業報告一覧</Heading>
            <Flex direction="row" alignItems="center">
              <select
                value={searchBy}
                onChange={(e) => setSearchBy(e.target.value)}
                className="search-select"
                style={{
                  padding: "0.5rem", 
                  fontSize: "1rem", 
                  borderRadius: "4px", 
                  border: "1px solid #ccc", 
                  margin: "0 1rem"
                }}
              >
                <option value="customer">顧客名</option>
                <option value="content">内容</option>
                <option value="id">ID No</option>
                <option value="date">日付</option>
              </select>
              <TextField
                placeholder="Search notes"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                margin="0 1rem"
                style={{
                  padding: "0.5rem", 
                  fontSize: "1rem", 
                  borderRadius: "4px", 
                  border: "1px solid #ccc"
                }}
              />
              <Button onClick={handleSearch}>検索</Button>
            </Flex>
          </Flex>

          {/* ノート一覧をテーブル形式で表示 */}
          <View as="table" className="notes-table" margin="3rem 0">
            <thead>
              <tr>
                <th></th>
                <th>日付</th>
                <th>顧客名</th>
                <th>タイトル</th>
                <th>内容</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {displayedNotes.map((note, index) => (
                <tr key={note.id || note.customer}>
                  {/* 追加順にIDを表示 */}
                  <td>{index + 1}</td>
                  <td>{note.date}</td>
                  <td>{note.customer}</td>
                  <td>{note.title}</td>
                  <td>{note.content}</td>
                  <td>
                    <Button 
                      variation="link" 
                      onClick={() => navigation(`/edit/${note.id}`)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </View>

          {/* 件数表示とページネーション */}
          <Flex justifyContent="space-between" alignItems="center" margin="1rem 0">
            <Text>{`${filteredNotes.length}件中${startIndex}～${endIndex}件表示`}</Text> {/* 件数表示 */}
            
            {/* ページネーション */}
            <Flex justifyContent="center" alignItems="center">
              <Button 
                variation="link" 
                onClick={() => setCurrentPage(1)} 
                disabled={currentPage === 1}
              >
                &laquo;
              </Button>
  
              {Array.from({ length: totalPages }, (_, index) => (
                <Button
                  key={index + 1}
                  variation="link"
                  onClick={() => setCurrentPage(index + 1)}
                  disabled={currentPage === index + 1}
                >
                  {index + 1}
                </Button>
              ))}
  
              <Button 
                variation="link" 
                onClick={() => setCurrentPage(totalPages)} 
                disabled={currentPage === totalPages}
              >
                &raquo;
              </Button>
            </Flex>
          </Flex>
  
        </>
      ) : (
        <Login />
      )}
    </View>
  );  
};

export default withAuthenticator(App);
