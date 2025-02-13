"use client";
import error from "./styles/error-boundary.module.scss";
import React from "react";
export default function ErrorFallback() : React.ReactElement {
  return (
    <div className={error.container}>
      Could not load the page, please try again later
    </div>
  );
}
