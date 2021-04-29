import React, { useRef } from "react";
import { DropTargetMonitor, useDrag, useDrop, XYCoord } from "react-dnd";

import { BoardQuery } from "../../generated/graphql";
import styles from "./item.module.scss";

interface Props {
  index: number;
  listIndex: number;
  item: NonNullable<
    NonNullable<NonNullable<BoardQuery["board"]["lists"]>[0]["items"]>[0]
  >;
  move: (i1: number, i2: number) => void;
}

const Item: React.FC<Props> = (props) => {
  const { item, move, index, listIndex } = props;
  const dragType = `${item.__typename!}-${listIndex}`;

  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop({
    accept: dragType,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: { index: number }, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      move(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: dragType,
    item: () => {
      return { id: item.id };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));
  const opacity = isDragging ? 0 : 1;

  return (
    <div
      ref={ref}
      style={{ opacity }}
      data-handler-id={handlerId}
      className={styles.item}
    >
      {item.name}
    </div>
  );
};

export default Item;
