import { CiBookmark } from "react-icons/ci";
import { FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details, tags } =
    news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200">
      {/* Author Section */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div>
          <button className="btn bg-transparent border-0 p-0 m-0">
            <CiBookmark size={22} className="text-gray-500" />
          </button>
          <button className="btn bg-transparent border-0 p-0 m-0">
            <FaShareAlt size={16} className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="font-bold text-lg hover:text-primary cursor-pointer">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-2">
        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="rounded-xl w-full object-cover h-56"
        />
      </figure>

      {/* Details */}
      <div className="p-4 text-sm text-gray-600">
        <p>
          {details.slice(0, 200)}...
          <span className="text-primary font-semibold cursor-pointer hover:underline">
            Read More
          </span>
        </p>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag, idx) => (
            <span key={idx} className="badge badge-outline text-xs lowercase">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t border-base-200 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < rating.number ? "text-warning" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-1 font-semibold">{rating.number}</span>
        </div>

        <div className="flex items-center gap-1">
          <FaEye className="text-gray-400" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
