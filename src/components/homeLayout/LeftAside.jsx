import { Suspense } from "react";
import Categories from "../Categories";

const LeftAside = () => {
  const categoryPromise = fetch("/categories.json").then((res) => res.json());
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xs"></span>}
      >
        <Categories categoryPromise={categoryPromise}></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
