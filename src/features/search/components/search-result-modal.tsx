import { motion } from "motion/react";
import styles from "./styles/search-result-modal.module.scss"
import { useAppDispatch, useAppSelector } from "#/hooks/useStore";
import { getModalResultOpen, getSearchQuery, SET_MODAL_RESULT_OPEN } from "../stores/search";
import { useCallback, useEffect } from "react";
export const SearchResultModal = () => {

    const searchResultOpen = useAppSelector(getModalResultOpen);
    const dispatch = useAppDispatch();
    const query = useAppSelector(getSearchQuery);

    const handleEventClick = useCallback((e: Event) => {
        const target = e.target as HTMLElement;
        const container = document.getElementById("search-form");
        if (container && !container.contains(target)) {
            dispatch(SET_MODAL_RESULT_OPEN(false));
        }
    }, [searchResultOpen])

    useEffect(() => {
        document.addEventListener("click", handleEventClick);
        return () => {
            document.removeEventListener("click", handleEventClick);
        }
    }, [handleEventClick])

    return (
        <motion.div
            id={"search-result-dropdown"}
            role={"multiselect"}
            aria-multiselectable="false"
            className={styles.container}
            transition={{ duration: 0.2 }}
            initial={{
                opacity: 0,
                y: -10
            }}
            animate={{
                y: 0,
                opacity: 1
            }}
            exit={{
                opacity: 0,
                y: -10,
            }}
        >
            {query}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi dolor expedita facere, iure nobis omnis optio quia, rerum sunt tempora totam voluptatem voluptates? Adipisci alias aspernatur deleniti hic iste?
        </motion.div>
    )
};