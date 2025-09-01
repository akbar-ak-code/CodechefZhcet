import React,{useRef, useState} from 'react';
import e1 from "./events_gallery/e1.jpg";
import e2 from "./events_gallery/e2.jpg";
import e3 from "./events_gallery/e3.jpg";
import e4 from "./events_gallery/e4.jpg";
import e5 from "./events_gallery/e5.jpg";
import e6 from "./events_gallery/e6.jpg";

interface gallery 
  {
    name:string,
    link:string,
    visiblity:boolean
  }


const galleryImages:gallery[] = [
  {name:'Event 1' ,link:e1,visiblity:false},
  {name:'Event 2' ,link:e2,visiblity:false},
  {name:'Event 3' ,link:e3,visiblity:false},
  {name:'Event 4' ,link:e4,visiblity:false},
  {name:'Event 5' ,link:e5,visiblity:false},
  {name:'Event 6' ,link:e6,visiblity:false},
  // {name:'Event 7' ,link:'/images/event1.jpg',visiblity:false},
 
];

const Gallery:React.FC = () => {

  const [visibleDivs,setVisibleDivs]=useState(
    galleryImages.map(()=>false))


    const visible=(index:number)=>{
      setVisibleDivs((preState)=>(
      preState.map(()=>false)
      ))
      setVisibleDivs((preState)=>

      preState.map((isVisible,i)=>{
      
        return i===index?!isVisible:isVisible}))
    }


  return (
    <div className="bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-50 min-h-screen py-10 pt-24">

      <h1 className="text-5xl font-bold text-center mb-10">Past Events Gallery</h1>
      <div className=" mx-auto px-4 sm:px-6 grid grid-cols-4 lg:grid-cols-6 gap-2 mb-6">
           {galleryImages.map((image,index)=>(
            <div key={index} className=' rounded-[20px] bg-green-400 dark:bg-gradient-to-r dark:via-green-400 dark:from-white dark:to-white p-1'>
            <button key={index} onClick={()=>visible(index)}
            className=' dark:text-white rounded-[20px] h-8 w-full bg-white dark:bg-black hover:bg-transparent hover:text-black '
            >{image.name}</button>
            </div>
           ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 "> */}
          {galleryImages.map((image, index) => (
            <div key={index} className='relative w-full group' style={{display:visibleDivs[index]?"block":"none"}}>
              <h3 className='text-center font-bold text-5xl text-black dark:text-white'>{image.name}</h3>
              <a href='#'>
              <img
  src={image.link}
  alt={image.name}
  className="w-full h-60 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-contain rounded-lg transition-transform duration-500 ease-in-out hover:scale-105"
/>

              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0">
                <p className="text-white text-lg font-semibold">Event {index + 1}</p>
              </div>
              </a>
            </div>
          ))}
        </div>
      {/* </div> */}
    </div>
  );
};

export default Gallery;
