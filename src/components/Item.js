import React, { Component, useState } from "react";

export default function Item() {
  return (
    <div>
      <span>owner</span>
      <span> model</span>
      <span>description</span>

      <button>Update</button>
      <button>Delete</button>
      <button>Done</button>
    </div>
  );
}
