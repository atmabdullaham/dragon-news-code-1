import { use } from "react";

const Categories = ({ categoryPromise }) => {
  const categories = use(categoryPromise);
  console.log(categories);
  return <div>All Categories({categories.length})</div>;
};

export default Categories;
