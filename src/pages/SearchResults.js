import { getJournalist } from "../service.js";
import styles from "./SearchResults.module.css";

import List from "../components/SearchResults/List";

function SearchReults() {
  return (
    <div className={styles.listStyles}>
      <List />
    </div>
  );
}

export default SearchReults;
