import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
  let course = props.course;
  let likeCount = props.likeCount;
  let setLikeCount = props.setLikeCount

  function likeHandler(){
    if(likeCount.includes(course.id)){
      setLikeCount(likeCount.filter((f) => f !== course.id))
      toast.warning(`Like Removed: ${course.title}`)
    }else{
      setLikeCount((prev)=> [...prev, course.id])
      toast.success(`Liked Successfully: ${course.title}`)
    }
  }
  
  console.log(likeCount);
  return (
    <div className="bg-[#2A2B44] text-white w-[300px] rounded-md overflow-hidden border-cyan-400 border-[1px] ">
      <div className="relative">
        <img src={course.image.url} loading="lazy" />
        <div className="absolute -bottom-3 right-3">
          <button className="bg-slate-50 rounded-full p-1" onClick={likeHandler}>
            {(likeCount.includes(course.id))? <FcLike className="text-3xl" /> : <FcLikePlaceholder className="text-3xl" />}
          </button>
        </div>
      </div>
      <div className="px-4 pt-2 pb-6">
        <p className="text-xl font-bold mb-2 text-cyan-400">{course.title}</p>
        <p>{course.description.substring(0, 100) + "..."}</p>
      </div>
    </div>
  );
}

export default Card;
