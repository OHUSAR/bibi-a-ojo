import React from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

import {
  useAddItemMutation,
  useAddListMutation,
  useBoardQuery,
} from "../../generated/graphql";
import Input from "../../components/input/input";
import styles from "./board.module.scss";
import List from "../../components/list";

const Board = () => {
  const match = useRouteMatch<{ id: string }>();
  const { data } = useBoardQuery({ variables: { id: match.params.id } });

  const [addList] = useAddListMutation();
  const onListSubmit = (boardId: string, name: string) => {
    return addList({ variables: { input: { name, boardId } } });
  };

  const [addItem] = useAddItemMutation();
  const onItemSubmit = (listId: string, name: string) => {
    return addItem({ variables: { input: { name, listId } } });
  };

  return data?.board ? (
    <>
      <h1>{data.board.name}</h1>
      <div className={styles.board}>
        {data.board.lists &&
          data.board.lists.map((list, index) => (
            <List list={list} key={list.id} index={index}>
              <Input
                name="item"
                onSubmit={(value) => onItemSubmit(list.id, value)}
              />
            </List>
          ))}
        <Input
          name="list"
          onSubmit={(value) => onListSubmit(data.board.id, value)}
          className={styles.listInput}
        />
      </div>
      <Link to="/" className={styles.back} data-cy="back">
        All Boards
      </Link>
    </>
  ) : null;
};

export default Board;
