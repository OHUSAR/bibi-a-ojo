import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};


export type AddBoardInput = {
  name: Scalars['String'];
};

export type AddItemInput = {
  listId: Scalars['ID'];
  name: Scalars['String'];
};

export type AddListInput = {
  boardId: Scalars['ID'];
  name: Scalars['String'];
};

export type Board = Node & {
  __typename?: 'Board';
  id: Scalars['ID'];
  name: Scalars['String'];
  lists?: Maybe<Array<List>>;
};

export type BoardPayload = {
  __typename?: 'BoardPayload';
  board?: Maybe<Board>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Item = Node & {
  __typename?: 'Item';
  id: Scalars['ID'];
  name: Scalars['String'];
  list: List;
};

export type ItemPayload = {
  __typename?: 'ItemPayload';
  item?: Maybe<Item>;
};

export type List = Node & {
  __typename?: 'List';
  id: Scalars['ID'];
  name: Scalars['String'];
  items?: Maybe<Array<Item>>;
  board?: Maybe<Board>;
};

export type ListPayload = {
  __typename?: 'ListPayload';
  list?: Maybe<List>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBoard?: Maybe<BoardPayload>;
  addList?: Maybe<ListPayload>;
  addItem?: Maybe<ItemPayload>;
};


export type MutationAddBoardArgs = {
  input: AddBoardInput;
};


export type MutationAddListArgs = {
  input: AddListInput;
};


export type MutationAddItemArgs = {
  input: AddItemInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  boards?: Maybe<Array<Board>>;
  board: Board;
};


export type QueryBoardArgs = {
  id: Scalars['ID'];
};

export type BoardQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BoardQuery = (
  { __typename?: 'Query' }
  & { board: (
    { __typename?: 'Board' }
    & Pick<Board, 'id' | 'name'>
    & { lists?: Maybe<Array<(
      { __typename?: 'List' }
      & Pick<List, 'id' | 'name'>
      & { items?: Maybe<Array<(
        { __typename?: 'Item' }
        & Pick<Item, 'id' | 'name'>
      )>> }
    )>> }
  ) }
);

export type AddListMutationVariables = Exact<{
  input: AddListInput;
}>;


export type AddListMutation = (
  { __typename?: 'Mutation' }
  & { addList?: Maybe<(
    { __typename?: 'ListPayload' }
    & { list?: Maybe<(
      { __typename?: 'List' }
      & Pick<List, 'id'>
      & { board?: Maybe<(
        { __typename?: 'Board' }
        & Pick<Board, 'id' | 'name'>
        & { lists?: Maybe<Array<(
          { __typename?: 'List' }
          & Pick<List, 'id' | 'name'>
        )>> }
      )> }
    )> }
  )> }
);

export type AddItemMutationVariables = Exact<{
  input: AddItemInput;
}>;


export type AddItemMutation = (
  { __typename?: 'Mutation' }
  & { addItem?: Maybe<(
    { __typename?: 'ItemPayload' }
    & { item?: Maybe<(
      { __typename?: 'Item' }
      & Pick<Item, 'id'>
      & { list: (
        { __typename?: 'List' }
        & Pick<List, 'id' | 'name'>
        & { items?: Maybe<Array<(
          { __typename?: 'Item' }
          & Pick<Item, 'id' | 'name'>
        )>> }
      ) }
    )> }
  )> }
);

export type BoardsQueryVariables = Exact<{ [key: string]: never; }>;


export type BoardsQuery = (
  { __typename?: 'Query' }
  & { boards?: Maybe<Array<(
    { __typename?: 'Board' }
    & Pick<Board, 'id' | 'name'>
    & { lists?: Maybe<Array<(
      { __typename?: 'List' }
      & Pick<List, 'id' | 'name'>
      & { items?: Maybe<Array<(
        { __typename?: 'Item' }
        & Pick<Item, 'id' | 'name'>
      )>> }
    )>> }
  )>> }
);

export type AddBoardsMutationVariables = Exact<{
  input: AddBoardInput;
}>;


export type AddBoardsMutation = (
  { __typename?: 'Mutation' }
  & { addBoard?: Maybe<(
    { __typename?: 'BoardPayload' }
    & { board?: Maybe<(
      { __typename?: 'Board' }
      & Pick<Board, 'id' | 'name'>
    )> }
  )> }
);


export const BoardDocument = gql`
    query Board($id: ID!) {
  board(id: $id) {
    id
    name
    lists {
      id
      name
      items {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useBoardQuery__
 *
 * To run a query within a React component, call `useBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBoardQuery(baseOptions: Apollo.QueryHookOptions<BoardQuery, BoardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BoardQuery, BoardQueryVariables>(BoardDocument, options);
      }
export function useBoardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BoardQuery, BoardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BoardQuery, BoardQueryVariables>(BoardDocument, options);
        }
export type BoardQueryHookResult = ReturnType<typeof useBoardQuery>;
export type BoardLazyQueryHookResult = ReturnType<typeof useBoardLazyQuery>;
export type BoardQueryResult = Apollo.QueryResult<BoardQuery, BoardQueryVariables>;
export const AddListDocument = gql`
    mutation AddList($input: AddListInput!) {
  addList(input: $input) {
    list {
      id
      board {
        id
        name
        lists {
          id
          name
        }
      }
    }
  }
}
    `;
export type AddListMutationFn = Apollo.MutationFunction<AddListMutation, AddListMutationVariables>;

/**
 * __useAddListMutation__
 *
 * To run a mutation, you first call `useAddListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addListMutation, { data, loading, error }] = useAddListMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddListMutation(baseOptions?: Apollo.MutationHookOptions<AddListMutation, AddListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddListMutation, AddListMutationVariables>(AddListDocument, options);
      }
export type AddListMutationHookResult = ReturnType<typeof useAddListMutation>;
export type AddListMutationResult = Apollo.MutationResult<AddListMutation>;
export type AddListMutationOptions = Apollo.BaseMutationOptions<AddListMutation, AddListMutationVariables>;
export const AddItemDocument = gql`
    mutation AddItem($input: AddItemInput!) {
  addItem(input: $input) {
    item {
      id
      list {
        id
        name
        items {
          id
          name
        }
      }
    }
  }
}
    `;
export type AddItemMutationFn = Apollo.MutationFunction<AddItemMutation, AddItemMutationVariables>;

/**
 * __useAddItemMutation__
 *
 * To run a mutation, you first call `useAddItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addItemMutation, { data, loading, error }] = useAddItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddItemMutation(baseOptions?: Apollo.MutationHookOptions<AddItemMutation, AddItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddItemMutation, AddItemMutationVariables>(AddItemDocument, options);
      }
export type AddItemMutationHookResult = ReturnType<typeof useAddItemMutation>;
export type AddItemMutationResult = Apollo.MutationResult<AddItemMutation>;
export type AddItemMutationOptions = Apollo.BaseMutationOptions<AddItemMutation, AddItemMutationVariables>;
export const BoardsDocument = gql`
    query Boards {
  boards {
    id
    name
    lists {
      id
      name
      items {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useBoardsQuery__
 *
 * To run a query within a React component, call `useBoardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBoardsQuery(baseOptions?: Apollo.QueryHookOptions<BoardsQuery, BoardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BoardsQuery, BoardsQueryVariables>(BoardsDocument, options);
      }
export function useBoardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BoardsQuery, BoardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BoardsQuery, BoardsQueryVariables>(BoardsDocument, options);
        }
export type BoardsQueryHookResult = ReturnType<typeof useBoardsQuery>;
export type BoardsLazyQueryHookResult = ReturnType<typeof useBoardsLazyQuery>;
export type BoardsQueryResult = Apollo.QueryResult<BoardsQuery, BoardsQueryVariables>;
export const AddBoardsDocument = gql`
    mutation AddBoards($input: AddBoardInput!) {
  addBoard(input: $input) {
    board {
      id
      name
    }
  }
}
    `;
export type AddBoardsMutationFn = Apollo.MutationFunction<AddBoardsMutation, AddBoardsMutationVariables>;

/**
 * __useAddBoardsMutation__
 *
 * To run a mutation, you first call `useAddBoardsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBoardsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBoardsMutation, { data, loading, error }] = useAddBoardsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddBoardsMutation(baseOptions?: Apollo.MutationHookOptions<AddBoardsMutation, AddBoardsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBoardsMutation, AddBoardsMutationVariables>(AddBoardsDocument, options);
      }
export type AddBoardsMutationHookResult = ReturnType<typeof useAddBoardsMutation>;
export type AddBoardsMutationResult = Apollo.MutationResult<AddBoardsMutation>;
export type AddBoardsMutationOptions = Apollo.BaseMutationOptions<AddBoardsMutation, AddBoardsMutationVariables>;