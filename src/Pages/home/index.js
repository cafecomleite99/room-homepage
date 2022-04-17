import Intro from '../../Components/Intro';
import { HomeWrapper } from './styles'

import aboutDark from '../../Assets/image-about-dark.jpg'
import aboutLight from '../../Assets/image-about-light.jpg'

const Home = () => {
    return ( 
        <HomeWrapper>
            <div className='upper'>
                <Intro />
            </div>
            <div className='lower'>
                <img src={aboutDark} />
                <section className='container'>
                    <div className="content">
                        <h4>ABOUT OUR FURNITURE</h4>
                        <p>Our multifunctional collection blends design and function to suit your individual taste.
                        Make each room unique, or pick a cohesive theme that best express your interests and what
                        inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                        or anything in between. Product specialists are available to help you create your dream space.</p>                        
                    </div>

                </section>
                <img src={aboutLight} />
            </div>

        </HomeWrapper>
     );
}
 
export default Home;