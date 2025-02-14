"use client";
import { motion } from "motion/react";
import styles from "./styles/search-result-modal.module.scss";
import { useAppDispatch, useAppSelector } from "#/hooks/useStore";
import {
  getModalResultOpen,
  getSearchQuery,
  SET_MODAL_RESULT_OPEN,
} from "../stores/search";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { ProgressBar } from "#/components/elements/progress-bar/progress-bar";
import { SearchIcon } from "../assets";
import { useSearchQuery } from "../hooks/useSearchQuery";
export const SearchResultModal = ({
  handleSearchSubmit,
}: {
  handleSearchSubmit: (path: string) => void;
}) => {
  const searchResultOpen = useAppSelector(getModalResultOpen);
  const dispatch = useAppDispatch();
  const query = useAppSelector(getSearchQuery);
  const options: HTMLOptionElement[] = Array.from(
    document.querySelectorAll("#search-result-dropdown div[role=option]")
  );
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  //############ FOR HANDLE ANY KEYBOARD #####################//
  const handleEventClick = useCallback(
    (e: Event) => {
      const target = e.target as HTMLElement;
      const container = document.getElementById("search-form");
      if (container && !container.contains(target)) {
        dispatch(SET_MODAL_RESULT_OPEN(false));
      }
    },
    [searchResultOpen]
  );
  //################### FOR HANDLE SELECT OPTION ####################/
  const handleSelect = useCallback(
    (e: KeyboardEvent) => {
      const key = e.key as "ArrowDown" | "ArrowUp" | "Enter" | "Tab" | "Escape";
      if (key === "Tab" || key === "Escape") {
        dispatch(SET_MODAL_RESULT_OPEN(false));
      }
      if (key == "ArrowDown") {
        const option =
          options[
            currentIndex === null || currentIndex === options.length - 1
              ? 0
              : currentIndex + 1
          ];
        if (currentIndex != null) {
          if (option) {
            option.scrollIntoView({
              behavior: "smooth",
              inline: "nearest",
              block: "nearest",
            });
          }
        }
        e.preventDefault();
        setCurrentIndex((prev) => {
          if (prev == null || prev >= options.length - 1) return 0;
          else return prev == options.length - 1 ? 0 : prev + 1;
        });
      }
      if (key == "ArrowUp") {
        const option =
          options[
            currentIndex === null || currentIndex === 0
              ? options.length - 1
              : currentIndex - 1
          ];
        if (currentIndex != null) {
          if (option) {
            option.scrollIntoView({
              behavior: "smooth",
              inline: "nearest",
              block: "nearest",
            });
          }
        }
        e.preventDefault();
        setCurrentIndex((prev) => {
          if (prev === null || prev <= 0) {
            return options.length - 1;
          } else {
            return prev - 1;
          }
        });
      }
      if (key === "Enter") {
        if (!query) return;
        else if (currentIndex == null) {
          handleSearchSubmit(`/search?q=${query}`);
        } else {
          e.preventDefault();
          const href = options[currentIndex]?.getAttribute("data-href");
          if (href) {
            handleSearchSubmit(href);
          }
        }
      }
    },
    [currentIndex]
  );

  //handle click
  useEffect(() => {
    document.addEventListener("keydown", handleSelect);
    document.addEventListener("click", handleEventClick);
    return () => {
      document.removeEventListener("keydown", handleSelect);
      document.removeEventListener("click", handleEventClick);
    };
  }, [handleEventClick, handleSelect]);
  useEffect(() => {
    setCurrentIndex(null);
  }, [query]);

  const { isLoading, data, error } = useSearchQuery(query);
  console.log(data?.data);

  return (
    <motion.div
      id={"search-result-dropdown"}
      role={"multiselect"}
      aria-multiselectable="false"
      className={styles.container}
      transition={{ duration: 0.2 }}
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        y: -10,
      }}
    >
      {isLoading && <ProgressBar />}
      {!query ? (
        <div className={styles.placeholder}>
          Try searching for people, topics, or keywords
        </div>
      ) : (
        <div className={styles.results}>
          <div className={styles.hastags}>
            {data?.data.map((text: any, index: number) => {
              return (
                <SearchResult
                  href={`/search?q=${text}`}
                  key={index}
                  selected={currentIndex === index}
                >
                  <span className={styles.hastag}>
                    <span className={styles.icon}>
                      <SearchIcon />
                    </span>
                    <div className={styles.text}>
                      <span>{text}</span>
                      <span>Trending</span>
                    </div>
                  </span>
                </SearchResult>
              );
            })}
          </div>
          <SearchResult
            href={`/${query}`}
            selected={currentIndex === options.length - 1}
          >
            <span className={styles.link}>Go To @{query}</span>
          </SearchResult>
        </div>
      )}
    </motion.div>
  );
};
const SearchResult = ({
  children,
  selected,
  href,
}: {
  selected: boolean;
  children: ReactNode;
  href: string;
}) => {
  return (
    <div
      role="option"
      data-role="option"
      tabIndex={0}
      aria-selected={selected}
      data-href={href}
      className={!selected ? styles.option : styles.selected}
    >
      <button>{children}</button>
    </div>
  );
};
