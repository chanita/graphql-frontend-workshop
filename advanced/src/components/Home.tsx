import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import ArticleBlock from './ArticleBlock';
import { GET_ARTICLES } from '../operations';
import { Article, GetArticlesQuery, GetArticlesQueryVariables } from 'src/gql/graphql';

const listStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const listItemStyle = {
  margin: '0 5px',
};

type HomeProps = {
  filter: string;
}

// type ArticleType = {
//   //fields for Article from GraphQL
//   id: string;
//   title: string;
//   description: string;
//   user: UserType;
//   upvotes: number;
// }

// type UserType = {
//   username: string;
// }

function Home({ filter }: HomeProps) {
  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery<GetArticlesQuery, GetArticlesQueryVariables>(GET_ARTICLES, {
    variables: { tag: filter, page, isAuthenticated: false },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  // const articles: ArticleType[] = data.articles;

  return (
    <>
      <ul style={listStyle}>
        {data?.articles?.length === 0 ? <li style={listItemStyle}>...</li> : null}
        {data?.articles?.map((article: Article, index: number) => (
          <ArticleBlock key={article.id} index={index} {...article} />
        ))}
      </ul>
      <div>
        <button type='button' onClick={() => setPage(page + 1)}>
          Next page
        </button>
      </div>
    </>
  );
}

export default Home;
