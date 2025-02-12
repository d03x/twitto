import { PenIcon } from "#/assets/icons/pen-icon";
import { Button } from "#/components/elements/button/button";
import styles from "./components/styles/button-tweet.module.scss";
export const TweetButton = () => {
  return (
    <Button className={styles.tweet_button}>
        <span>
            <PenIcon/>
        </span>
        <span>Create Post</span>
    </Button>
  );
};
