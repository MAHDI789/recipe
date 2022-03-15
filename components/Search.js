import React from "react";
const URL =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=Beef%20and%20Mustard%20Pie";
function Search() {
  return (
    <div className="p-6 w-full text-center">
      <form action="">
        <input
          type="text"
          className="border border-slate-3000 outline-none px-4 py-2"
          placeholder="Search Meal"
          style={{ width: "70%" }}
        />
        <input
          type="button"
          value="Search"
          className="bg-sky-400 text-white font-bold p-2 cursor-pointer"
        />
      </form>
    </div>
  );
}

export default Search;
