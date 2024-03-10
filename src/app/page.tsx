"use client"
import { useState, useEffect } from "react";
import { Posts } from "./types/Posts";
import { PostForm } from "./components/PostForm";
import { PostItem } from "./components/PostItem";
import { Api } from "../Api";

const Page = () => {
  const [posts, setPosts] = useState <Posts[]>([]);
  const [loading, setLoading] = useState (false);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () =>{
    setLoading(true);
    let json = await Api.getAllPosts();
    setLoading(false);
    setPosts(json);
  }

  const handleAddPost = async (title: string, body: string) => {
    let json = await Api.addNewPost(title, body, 1);
    if(json.id) {
      alert("Post adicionado com sucesso");
    } else {
      alert("Deu problema");
    }
  }

  return (
    <div className="p-5">
      {loading &&
          <div>Carregando...</div>
      }

      <PostForm onAdd={handleAddPost} />

      {!loading && posts.length > 0 &&
        <>
          <div>Total de posts: {posts.length}</div>
          <div>
            {posts.map((item, index) => (
              <PostItem data={item}/>
            ))}
          </div>
        </>
      }
    </div>
  );
}

export default Page; //Precisa ter esse comando para ele se exportado e assim funcionar