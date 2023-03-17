import React from "react";
import "./ListTodo.scss";

export default function ListTodo() {
  return (
    <div className="listTodo">
      <div className="listTodo__row">
        <div className="listTodo__item">Buy New Laptop</div>
        <div className="listTodo__delete">Del</div>
      </div>
      <div className="listTodo__row">
        <div className="listTodo__item">Create Codehance Course</div>
        <div className="listTodo__delete">Del</div>
      </div>
      <div className="listTodo__row">
        <div className="listTodo__item">Create Portfolio Site</div>
        <div className="listTodo__delete">Del</div>
      </div>
      <div className="listTodo__row">
        <div className="listTodo__item">Revise Assignment</div>
        <div className="listTodo__delete">Del</div>
      </div>
    </div>
  );
}
