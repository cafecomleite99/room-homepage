import { IntroWrapper } from './styles'
import { useState, useEffect, useRef } from 'react'

import Description from '../Description';

import forward from '../../Assets/Icons/icon-angle-right.svg'
import backward from '../../Assets/Icons/icon-angle-left.svg'

import Hero1 from '../../Assets/hero-1.jpg'
import Hero2 from '../../Assets/hero-2.jpg'
import Hero3 from '../../Assets/hero-3.jpg'
import Navbar from '../Navbar';


const Intro = () => {


    const cards = [
         {
             title: "Discover innovative ways to decorate",
             description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
             image: Hero1
         },
         {
             title: "We are available all across the globe",
             description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
             image: Hero2
         },
         {
             title: "Manufactured with the best materials",
             description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
             image: Hero3
         }
     
     ]

   const [data, setData] = useState(cards);
   const [position, setPosition] = useState(0);


   
   let timer = useRef()
    
   useEffect(() => {
        timer.current = setTimeout( () => {
           clearTimeout(timer)
           handleForward()
       }, 5000)      
       
   }, [position]);


   function handleForward () {
       if (position < 2){
           setPosition(position => position + 1)
       } else {
           setPosition(0)
       }

       clearTimeout(timer.current)
    }
    
    function handleBackward () {
        if (position > 0){
            setPosition(position => position - 1)
        } else {
            setPosition(2)
        }
        clearTimeout(timer.current)
    }

    
    
    return ( 
        <IntroWrapper position={position * 100}>
            <section className='image-carousel'>
                <Navbar className="navbar"/>
                <div className="content">
                    {data.map( item =>  <img key={item.title} src={item.image}/>)}
                </div>
            </section>
            <section className="description">
                <Description button title={data[position].title} position={position}>
                    {data[position].description}
                </Description>
                <section className='buttons'>
                    <div className="backward" onClick={handleBackward}><img src={backward} alt="backward" /></div>
                    <div className="forward" onClick={handleForward}><img src={forward} alt="forward" /></div>
                </section>
            </section>
        </IntroWrapper> 
    );
}
 
export default Intro;