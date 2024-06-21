import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';
const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler(){
    if(likedCourses.includes(course.id)){
      //initiate liked -> remove like
      setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)))
      toast.warning("Like Removed");
    }
    else{
       //Not-initiate liked -> we can like the course
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      }
      else{
        //non-empty
        setLikedCourses((prev)=> [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  } 

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-100 rounded-md overflow-hidden'>
        
        <div className='relative'>
          <img src={course.image.url} alt="image" />

          <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
          grid place-items-center'>
            <button onClick={clickHandler}>
              {
                !likedCourses.includes(course.id) ? 
                (<FcLikePlaceholder fontSize="1.75rem"/>):
                (<FcLike fontSize="1.75rem"/>)
              }
            </button>
          </div>
    </div>
       

        <div>
          <p className='text-white p-3 font-semibold text-lg leading-6 '>{course.title}</p>
          <p className='p-3 text-white'>
            {
          
          course.description.length > 100 ?
          (course.description.substr(0,100)):
          (course.description)
          
          }</p>
        </div> 

    </div>
  )
}

export default Card;
