import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const articleStyle = {
  margin: 0,
  padding: '10px 20px',
};

function Article() {
  const [article, setArticle] = useState({});
  let params = useParams();

  useEffect(() => {
    async function fetchArticleById(id) {
      try {
        const data = await fetch('https://publicde4bbd314df078af.stepzen.net/api/newsapp/__graphql',{
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            query: `query GetArticleById($id: String){
              article(id : $id){
                id
                title
                user {
                  name
                }
                description
                body_html
                created_at
              }
            }`,
            variables: {
              "id": id
            },
            operationName: "GetArticleById"
        })
        });
        const result = await data.json();

        if (result) {
          setArticle(result.data.article);
        }
      } catch (e) {
        console.log('Error', e.message);
      }
    }
    if (!article.id && params.id) {
      fetchArticleById(params.id);
    }
  }, [params.id, article]);

  return (
    <div style={articleStyle}>
      {!article.id === 0 ? <p>...</p> : null}
      <h2>{article.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: article.body_html }} />
    </div>
  );
}

export default Article;
