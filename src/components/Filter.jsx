import { filterData } from "../data";

function Filter(props) {
    let category = props.category

  function filterHandler(title) {
    props.setCategory(title)
  }

  return (
    <div className="bg-[#4A4E69] flex justify-center align-middle gap-x-5 gap-y-3 flex-wrap text-xl text-white font-medium py-4 z-10 sticky top-0">
      {filterData.map((data) => {
        return (
          <button
            key={data.id}
            className={`bg-[#252734] px-2 py-1 rounded ${category === data.title ? "border-cyan-400 border-[2px]": "border-none"}`}
            onClick={() => filterHandler(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
