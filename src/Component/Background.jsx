import React,{useEffect, useState} from 'react'
import img1 from './Image/Himalaya_background.png'
import img2 from './Image/mountains_himalayas.avif'
import img3 from './Image/himalaya_pictures.jpg'

export const Background = () => {

    const [i,setI]=useState(0)
    const [image,setImage] = useState([img3,img1,img2])
    const [im,setIm]=useState(img3)
    

    const Next=()=>{
        setIm(image[i%3])
        setI(i+1)
    }

    useEffect(()=>{
        const myInterval=setInterval(Next,4000)
        return () => clearInterval(myInterval);
    },[i])



  return (
    <div id="background_image">
        <img src={im} alt="" />
    </div>
  )
}
