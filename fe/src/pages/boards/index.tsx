import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/input/input";

import { useAddBoardsMutation, useBoardsQuery } from "../../generated/graphql";
import styles from "./boards.module.scss";

const Boards = () => {
  const { data, refetch } = useBoardsQuery();

  const [addBoard] = useAddBoardsMutation();

  const onSubmit = (name: string) => {
    return addBoard({ variables: { input: { name } } }).then(() => refetch());
  };

  return (
    <>
      <h1>Board List</h1>
      <div className={styles.boards}>
        {data?.boards
          ? data.boards.map((board, index) => (
              <Link
                to={`/board/${board.id}`}
                className={styles.board}
                data-cy={`${index}-board-link`}
              >
                {board.name}
              </Link>
            ))
          : null}
        <Input name="board" onSubmit={onSubmit} className={styles.input} />
      </div>
    </>
  );
};

export default Boards;
