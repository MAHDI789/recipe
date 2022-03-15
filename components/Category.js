import React, { useState } from "react";
import Image from "next/image";
import ListMeals from "./ListMeals";

function Category({ categories }) {
  const [SingleMeals, setSingleMeals] = useState("");
  return (
    <>
      <div
        className="p-4 bg-sky-200 grid grid-cols-4 gap-x-4 gap-y-4 text-center"
        style={{ height: "auto" }}
      >
        {categories.map((catg, id) => {
          const { idCategory, strCategory, strCategoryThumb } = catg;
          return (
            <>
              <div>
                <div
                  key={idCategory}
                  className="bg-white rounded-full mx-auto overflow-hidden cursor-pointer"
                  style={{ height: "75px", width: "75px" }}
                  onClick={() => setSingleMeals(strCategory)}
                >
                  <img
                    src={strCategoryThumb}
                    alt={strCategory}
                    className="object-contain h-full w-full"
                  />
                </div>
                <h3 className="pt-2 font-bold">{strCategory}</h3>
              </div>
            </>
          );
        })}
      </div>
      <ListMeals singleMeals={SingleMeals} />
    </>
  );
}

export default Category;
