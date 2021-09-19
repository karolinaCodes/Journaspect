import styles from "./SearchResults.module.css";
import { useParams } from "react-router-dom";
import List from "../components/SearchResults/List";
import Context from "../store/context";
import { useContext } from "react";
import { searchJournalists } from "../service.js";

function SearchResults() {
  const ctx = useContext(Context);
  // TODO diplay jounalist stuff
  async function getSearchResults() {
    const query = new URLSearchParams(window.location.search).get("q");
    let results = await searchJournalists(query);
    ctx.searchResults = results;
    console.log(results);
    return results;
  }

  return (
    <div className={styles.listStyles}>
      <List />
    </div>
  );
}

export default SearchResults;
