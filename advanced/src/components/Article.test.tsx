import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import React from 'react';
import { GetArticleByIdDocument } from 'src/gql/graphql';
import Article from './Article';

jest.mock('react-router-dom', () => ({
    useParams: () => ({ id: '12121' }),
}));

const mocks = [
    // We'll fill this in next
    {
        request: {
            query: GetArticleByIdDocument,
            variables: { id: '12121' }
        },
        result: {
            "data": {
                "article": {
                    "id": '12121',
                    "title": "How I Created a File Sharing Website using Simple REACT",
                    "tags": "react, javascript, webdev, beginners",
                    "user": {
                        "name": "Varshith V Hegde"
                    },
                    "description": "Introduction   Welcome Dev Enthusiasts! In this blog, I will take you through the journey of...",
                }
            }
        }
    }

];

it('renders initial screen', async () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Article />
        </MockedProvider>,
    );
    expect(await screen.findByText('How I Created a File Sharing Website using Simple REACT')).toBeInTheDocument();
})

it('renders without error', async () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Article />
        </MockedProvider>,
    );
    expect(await screen.findByText('Loading...')).toBeInTheDocument();
});