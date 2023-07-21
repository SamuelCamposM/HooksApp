import React, { useState } from "react";
import useForm from "../../hooks/useForm";

export const TodoForm = ({ onNewTodo }) => {
  const { formState, onInputChange, onResetForm, desc } = useForm({
    desc: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (desc.length <= 1) return;
    onNewTodo({ ...formState, id: new Date().getTime(), done: false });
    onResetForm();
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Que haras?"
        className="form-control"
        value={desc}
        name={"desc"}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-2">
        Agregar
      </button>
    </form>
  );
};
