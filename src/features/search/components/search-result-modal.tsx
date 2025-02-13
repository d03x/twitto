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
import SearchIcon from "../assets/search-icon";
export const SearchResultModal = () => {
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
      const key = e.key as "ArrowDown" | "ArrowUp" | "Tab" | "Escape";
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
          if (prev == null || prev >= options.length -1) return 0;
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

  const beritaViral = [
    "Jokowi makan di warung, viral terbaru",
    "Presiden Indonesia makan bakso viral",
    "Momen viral presiden makan di pinggir jalan",
    "Makan gratis untuk rakyat, presiden beri kejutan",
    "Video terbaru viral, Jokowi makan bersama warga",
    "Presiden terjun langsung makan di pasar",
    "Makan malam spesial, menu terbaru presiden",
    "Viral! Presiden kunjungi warung makan sederhana",
    "Makanan khas daerah favorit presiden",
    "Terbaru! Presiden dan menteri makan di kantin",
    "Viral, warga makan bersama presiden di istana",
    "Makan siang di restoran, presiden bikin heboh",
    "Jokowi dan pejabat makan di warung sederhana",
    "Menu makan terbaru di istana presiden",
    "Warga heboh! Presiden makan di angkringan",
    "Makan bareng presiden, suasana jadi viral",
    "Terbaru! Presiden coba makanan kaki lima",
    "Makanan viral terbaru yang dicoba Jokowi",
    "Presiden makan durian, videonya viral",
    "Warung makan sederhana dikunjungi presiden",
  ];

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
      <div className={styles.results}>
        <div className={styles.hastags}>
          {beritaViral.map((text, index: number) => {
            return (
              <SearchResult key={index} selected={currentIndex === index}>
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
        <SearchResult selected={currentIndex === options.length - 1}>
          Go to Query
        </SearchResult>
      </div>
    </motion.div>
  );
};
const SearchResult = ({
  children,
  selected,
}: {
  selected: boolean;
  children: ReactNode;
}) => {
  return (
    <div
      role="option"
      data-role="option"
      tabIndex={0}
      aria-selected={selected}
      data-href="none"
      className={!selected ? styles.option : styles.selected}
    >
      <button>{children}</button>
    </div>
  );
};
