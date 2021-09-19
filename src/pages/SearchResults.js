import styles from "./SearchResults.module.css";
import { useParams } from "react-router-dom";
import List from "../components/SearchResults/List";
import Context from "../store/context";
import { useContext } from "react";

function SearchResults() {
  // TODO diplay jounalist stuff

  return (
    <div className={styles.listStyles}>
      <List />
    </div>
  );
}

export default SearchResults;
