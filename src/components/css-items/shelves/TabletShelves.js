import React from "react";
import Shelf from "./Shelf";
import Books2 from "../books/Books2";
import Radio from "../radio/Radio";
import Books from "../books/Books";
import Pens from "../writing/Pens";
import "./shelves.scss";
import Sewing from "../sewing/Sewing";
import Laptop from "../laptop/Laptop";

function TabletShelves() {
  return (
    <div className="tablet-shelves">
      {/* Shelf 1 */}
      <Shelf cssItem1={<Books2 cn={"tablet-books2-container"} />} />
      {/* Shelf 2*/}
      <Shelf
        cssItem1={<Radio cn={"tablet-radio-container"} />}
        cssItem2={<Pens cn={"tablet-pens-container"} />}
        cssItem3={<Laptop cn={"tablet-laptop-container"} />}
      />
      {/* Shelf 3 */}
      <Shelf
        cssItem1={<Sewing cn={"tablet-sewing-container"} />}
        cssItem2={<Books cn={"tablet-books-container"} />}
      />
    </div>
  );
}

export default TabletShelves;
