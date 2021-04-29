import React, { useState } from "react";
import styles from "./input.module.scss";

interface Props {
  name: string;
  onSubmit: (value: string) => Promise<any>;
  className?: string;
}

const Input: React.FC<Props> = (props) => {
  const { name, onSubmit, className } = props;

  const [value, setValue] = useState("");

  const onKeyDown = async (event: React.KeyboardEvent) => {
    if (!value || !value.trim()) {
      return;
    }
    if (event.key === "NumpadEnter" || event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      await onSubmit(value);
      setValue("");
    }
  };

  return (
    <textarea
      className={`${styles.input} ${className || ""}`}
      onKeyDown={onKeyDown}
      name={name}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="..."
      data-cy={`${name}-input`}
    />
  );
};

export default Input;
