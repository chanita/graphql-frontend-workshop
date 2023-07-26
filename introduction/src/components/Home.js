import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql, useMutation } from '@apollo/client';

const listStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const listItemStyle = {
  margin: '0 5px',
};

const labelStyle = {
  color: '#828282',
  paddingRight: 5,
};

const titleStyle = {
  background: 'transparent',
  border: 'none',
  font: 'inherit',
  cursor: 'pointer',
  padding: '5px 0',
};

function Home({ filter }) {
  const GET_ARTICLES = gql`
    query GetArticles($filter: String){
      articles(tag: $filter){
        id
        title
        tags
        user {
          username
        }
        description
        created_at
        upvotes
      }
    }
    `

  const UPVOTE_ARTICLE = gql`
    mutation UpvoteArticleByID($postId: String){
      upvoteArticle(postId: $postId)
    }
  `
  const { data, loading, error } = useQuery(GET_ARTICLES, {
    variables: {
      filter
    },
  })

  const [addUpvote, { loading: loadingMutation }] = useMutation(UPVOTE_ARTICLE)

  if (loading) return <p>loading</p>
  if (error) return <p>error</p>

  const { articles } = data

  return (
    <ul style={listStyle}>
      {articles.length === 0 ? <li style={listItemStyle}>...</li> : null}
      {articles.map(({ id, title, description, user, upvotes }, index) => (
        <li key={id} style={listItemStyle}>
          <span style={labelStyle}>{index + 1}. </span>

          <Link to={`articles/${id}`}>
            <button style={titleStyle}>{title}</button>
          </Link>

          <span style={{ paddingLeft: 5, ...labelStyle }}>
            ({user.username})
          </span>

          <p>
            <small>
              <span>{description} </span>
              <Link to={`/articles/${id}`}>More...</Link>
            </small>
          </p>
          <p>upvotes {upvotes}</p>
          <button onClick={() =>
            addUpvote({ 
              variables: { postId: id.toString() }, 
              refetchQueries: [GET_ARTICLES] 
            })
          }>Up</button>
        </li>
      ))}
    </ul>
  );
}

export default Home;
