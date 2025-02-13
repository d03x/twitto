"use client";
import styles from "./styles/form-search.module.scss";
import SearchIcon from "#/features/search/assets/search-icon";
import { ClearIcon } from "#/features/search/assets/clear-icon";
import { AnimatePresence } from "framer-motion";
import { SearchResultModal } from "#/features/search/components/search-result-modal";
import { ChangeEvent, useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "#/hooks/useStore";
import {
  getModalResultOpen,
  getSearchQuery,
  SET_MODAL_RESULT_OPEN,
  SET_QUERY,
} from "../stores/search";
import { useRouter } from "next/navigation";
export const Search = () => {
  const router = useRouter();
  const modalResultOpen = useAppSelector(getModalResultOpen);
  const searchQuery = useAppSelector(getSearchQuery);
  const dispatch = useAppDispatch();
  const handleSearchInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(SET_QUERY(event.target.value as string));
      if (event.target.value) {
        dispatch(SET_MODAL_RESULT_OPEN(true));
      } else {
        dispatch(SET_MODAL_RESULT_OPEN(false));
      }
    },
    []
  );
  //################# HANDLE FOR REDIRECT TO PAGE #######################//
  function handleSearchSubmit(path: string) {
    router.push(path);
    if (path !== "search") {
      dispatch(SET_QUERY(""));
    }
  }
  const closeResultModal = useCallback(() => {
    dispatch(SET_MODAL_RESULT_OPEN(false));
  }, [modalResultOpen]);
  return (
    <form
      action=""
      id={"search-form"}
      className={styles.container}
      aria-label={"search"}
      role={"search"}
      onSubmit={(e) => {
        e.preventDefault();
        if (!searchQuery) return;
        handleSearchSubmit(`/search?q=${searchQuery}`);
      }}
    >
      <label htmlFor="searchForm" onClick={closeResultModal}>
        <div className={styles.icon}>
          <SearchIcon />
        </div>
        <input
          value={searchQuery}
          aria-expanded={true}
          onChange={handleSearchInput}
          aria-label={"search-query"}
          aria-autocomplete={"list"}
          aria-activedescendant={"search-result-dropdown"}
          aria-owns={"search-result-dropdown"}
          aria-controls={"search-result-dropdown"}
          id={"searchForm"}
          list={"search-result-dropdown"}
          autoComplete={"off"}
          autoCorrect={"off"}
          role={"combobox"}
          enterKeyHint={"search"}
          spellCheck={"false"}
          type="text"
          placeholder="Search"
          className={"search"}
        />
        <button
          onClick={closeResultModal}
          className={styles.close}
          aria-label={"clear-search"}
          tabIndex={-1}
          type={"button"}
        >
          <ClearIcon />
        </button>
      </label>
      <AnimatePresence>
        {modalResultOpen && (
          <SearchResultModal handleSearchSubmit={handleSearchSubmit} />
        )}
      </AnimatePresence>
    </form>
  );
};
