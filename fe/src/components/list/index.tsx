import React, { useCallback, useEffect, useState } from "react";

import { BoardQuery } from "../../generated/graphql";
import Item from "../item";

import styles from "./list.module.scss";

interface Props {
  list: NonNullable<BoardQuery["board"]["lists"]>[0];
  index: number;
}

const DraggableList: React.FC<Props> = (props) => {
  const { list, children, index: listIndex } = props;

  const [items, setItems] = useState(list.items || []);

  const moveItem = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      if (dragIndex !== undefined && hoverIndex !== undefined) {
        const newItems = [...items];
        newItems[dragIndex] = items[hoverIndex];
        newItems[hoverIndex] = items[dragIndex];
        setItems(newItems);
      }
    },
    [items]
  );

  useEffect(() => {
    setItems(list.items || []);
  }, [list]);

  return (
    <div className={styles.list}>
      <div className={styles.listName}>{list.name}</div>
      {items.map((item, index) => (
        <Item
          key={item.id}
          index={index}
          listIndex={listIndex}
          item={item}
          move={moveItem}
        />
      ))}
      <div className={styles.items}>{children}</div>
    </div>
  );
};

export default DraggableList;
