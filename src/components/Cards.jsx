import Card from "./Card";
import { useState } from "react";

function Cards(props) {
  let courses = props.courses;
  let category = props.category;
  let [likeCount, setLikeCount] = useState('')

  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((eachCourseData) => {
          allCourses.push(eachCourseData);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  }
  // console.log(getCourses());

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4 px-3">
      {getCourses().map((eachCourse) => {
        return <Card key={eachCourse.id} course={eachCourse} likeCount={likeCount} setLikeCount={setLikeCount} />;
      })}
    </div>
  );
}

export default Cards;
