import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Category from "../components/Category";
import Search from "../components/Search";
export default function Home({ catg: { categories } }) {
  const [show, setShow] = useState(false);
  return (
    <div className="mobile-container bg-gray-100">
      <div className="mobile drop-shadow-xl rounded-md bg-white">
        <nav className="flex justify-between bg-white shadow-xl p-6 items-center">
          <h1 className="text-xl font-bold">EatNow</h1>
          <AiOutlineSearch
            className="icon-search cursor-pointer"
            onClick={() => setShow(!show)}
          />
        </nav>
        {show && <Search />}
        <Category categories={categories.slice(0, 8)} />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const catg = await res.json();

  return {
    props: { catg },
  };
}
