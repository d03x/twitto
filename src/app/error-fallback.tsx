"use client";
import error from "./styles/error-boundary.module.scss";
export default function ErrorFallback() : Element {
  return (
    <div className={error.container}>
      Could not load the page, please try again later
    </div>
  );
}
