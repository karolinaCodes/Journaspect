import { searchJournalists } from "../service.js";
import styles from "./SearchResults.module.css";

import List from "../components/SearchResults/List";

function SearchReults() {
  // TODO diplay jounalist stuff
  return (
    <div className={styles.listStyles}>
      <List />
    </div>
  );
}

async function getSearchResults() {
  const query = (new URLSearchParams(window.location.search)).get('q');
  let results = await searchJournalists(query);
  console.log(results);
  return results;
}

export default SearchReults;
