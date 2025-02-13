import {motion} from "motion/react";
import styles from "./styles/search-result-modal.module.scss"
export const SearchResultModal = () => {
  return (
      <motion.div
          id={"search-result-dropdown"}
          role={"multiselect"}
          aria-multiselectable="false"
          className={styles.container}
      initial={{
          opacity:0,
          y:-10
      }}
      animate={{
          y:0,
          opacity:1
      }}
      exit={{
          opacity:0,
          y:-10,
      }}
      >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi dolor expedita facere, iure nobis omnis optio quia, rerum sunt tempora totam voluptatem voluptates? Adipisci alias aspernatur deleniti hic iste?
      </motion.div>
  )
};