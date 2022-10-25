import React from 'react'
import { AtIcon,  dockerIcon, facebookIcon, flutterIcon, githubIcon, linkedinIcon, mongodbIcon, reactIcon, twitterIcon,  typescriptIcon, imageOne, imageTwo, imageThree} from '../assets/images'
   
const MainPage = () => {
  return (
   <>
   <section id='welcome'>
    <img width='400px' height='300px' src='https://sarkepo.com/wp-content/uploads/2022/06/pp-ultraman-wa-lucu-3.jpg'/>
    <h2>Surya Adi Nugroho</h2>
    <p>Technology enthusiast</p>
   </section>

   <section id='about'>
    <h2>#About</h2>
    <p>Software Engineer, Fullstack developer, Instructor who loves adventure around the world and share his experience !</p>
    <h2>#Stack</h2>
    <ul id='stack'>
        <li>
            <span className='sr-only' id='react'>React</span>
            <img src={reactIcon} altGambar React/>
        </li>
        <li>
            <span className='sr-only' id='docker'>Docker</span>
            <img src={dockerIcon}/>
        </li>
        <li>
            <span className='sr-only' id='mongodb'>MongoDB</span>
            <img src={mongodbIcon}/>
        </li>
        <li>
            <span className='sr-only' id='flutter'>Flutter</span>
            <img src={flutterIcon}/>
        </li>
        <li>
            <span className='sr-only' id='typescript'>TypeScript</span>
            <img src={typescriptIcon}/>
        </li>
    </ul>
   </section>

   <section id='project'>
    <h2>#Projects</h2>
    <p>Here are some of my projects !</p>
    <ul id='project-grid'>
        <li>
            <a href='#'>
            <img src={imageOne} alt='Gambar React'/>
            <span>project 1</span>
            </a>
        </li>
        <li>
            <a href='#'>
            <img src={imageTwo}/>
            <span>project 2</span>
            </a>
        </li>
        <li>
            <a href='#'>
            <img src={imageThree}/>
            <span>project 3</span>
            </a>
        </li>
        </ul>
   </section>

   <section id='contact'>
    <h2>#Contact</h2>
    <p>Let’s Work Together..</p>
    <span>Pick your favorite social media to get started.</span>
    <ul>
        <li id='facebook'>
            <a href='https://www.facebook.com'>
            <span className='sr-only'>Facebook</span>
            <img src={facebookIcon}/>
            </a>
        </li>
        <li id='github'>
            <a href='https://www.github.com/surya adi nugroho'>
            <span className='sr-only'>Github</span>
                <img src={githubIcon}/>
            </a>
        </li>
        <li id='twiter'>
            <a href='https://www.twitter.com'>
            <span className='sr-only'>Twiter</span>
            <img src={twitterIcon}/>
            </a>
        </li>
        <li id='email'>
            <a href='rendiromat123@gmail.com'>
            <span className='sr-only'>Email</span>
            <img src={AtIcon}/>
            </a>
        </li>
        <li id='linkedin'>
            <a href='https://linkedin.com/in/surya'>
            <span className='sr-only'>Linkedin</span>
            <img src={linkedinIcon}/>
            </a>
        </li>
    </ul>
   </section>
   </>
  )
}

export default MainPage


