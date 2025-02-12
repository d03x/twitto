"use client";
import error from "./styles/error-boundary.module.scss";
export default function ErrorFallback() {
  return (
    <div className={error.container}>
      Could not load the page, please try again later
    </div>
  );
}
