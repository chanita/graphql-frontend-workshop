import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
  query GetArticles($tag: String, $page: Int, $isAuthenticated: Boolean!) {
    articles(tag: $tag, page: $page) {
      id
      title
      description
      upvotes @include(if: $isAuthenticated)
      user {
        username
      }
    }
  }
`;

export const GET_ARTICLE = gql`
  query GetArticleById($id: String!) {
    article(id: $id) {
      id
      title
      description
      body_html
    }
  }
`;

export const UPVOTE_ARTICLE = gql`
  mutation UpvoteArticle($postId: String) {
    upvoteArticle(postId: $postId)
  }
`;
