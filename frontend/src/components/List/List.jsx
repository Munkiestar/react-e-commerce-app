import React from "react";
import "./List.scss";
import Card from "../Card/Card.jsx";
import useFetch from "../../hooks/useFetch.js";

const List = ({ sort, subCats, maxPrice, catId }) => {
  // filter by id, subCat id, price and asc and desc
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {loading
        ? "Loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};
export default List;
