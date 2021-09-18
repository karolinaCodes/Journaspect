import { getJournalist } from '../service.js';

function SearchReults(){
  return <div>SearchReults</div>
}

async function test() {
  console.log(await getJournalist());
}

test();

export default SearchReults;