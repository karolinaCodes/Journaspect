import { searchJournalists } from "../service.js";
import styles from "./SearchResults.module.css";
import { useParams } from "react-router-dom";
import List from "../components/SearchResults/List";
import Context from "../store/context";
import { useContext } from "react";

function SearchResults() {
  // TODO diplay jounalist stuff
  const ctx = useContext(Context);

  async function getSearchResults() {
    // const query = new URLSearchParams(window.location.search).get("q");
    let results = await searchJournalists(ctx.searchQuery);
    console.log(results);
    return results;
  }

  getSearchResults();
  return (
    <div className={styles.listStyles}>
      <List />
    </div>
  );
}

export default SearchResults;
