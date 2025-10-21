import { use } from "react";
import { NavLink } from "react-router";

const Categories = ({ categoryPromise }) => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h2>All Categories({categories.length})</h2>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {categories.map((category) => (
          <NavLink
            className={
              "btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent"
            }
            key={category.id}
            to={`category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
