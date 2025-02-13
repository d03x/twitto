import styles from "./styles/form-search.module.scss";
import SearchIcon from "#/features/search/assets/search-icon";
import {ClearIcon} from "#/features/search/assets/clear-icon";
import {AnimatePresence} from "framer-motion";
import {SearchResultModal} from "#/features/search/components/search-result-modal";
import {useState} from "react";

export const Search = () => {
    const [search, setSearch] = useState<boolean>(false);
    return <form
        action=""
        id={"search"}
        className={styles.container}
        aria-label={"search"}
        role={"search"}
    >
        <label htmlFor="searchForm" onClick={()=>setSearch(!search)}>
            <div className={styles.icon}>
                <SearchIcon />
            </div>
            <input
                aria-label={"search-query"}
                aria-autocomplete={"list"}
                aria-activedescendant={"search-result-dropdown"}
                aria-owns={"search-result-dropdown"}
                aria-controls={"search-result-dropdown"}
                id={"searchForm"}
                list={"search-result-dropdown"}
                autoComplete={'off'}
                autoCorrect={'off'}
                role={"combobox"}
                enterKeyHint={"search"}
                spellCheck={'false'}
                type="text"
                placeholder="Search"
                className={"search"}
            />
            <button
                className={styles.close}
                aria-label={"clear-search"}
                tabIndex={-1}
                type={"button"}
            >
                <ClearIcon/>
            </button>
        </label>
        {search &&  <AnimatePresence>
            <SearchResultModal/>
        </AnimatePresence>}
    </form>
};