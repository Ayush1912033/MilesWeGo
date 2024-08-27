import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import "swiper/swiper-bundle.css"

import GoaImage from './images/Goa.jpg';
import DarImage from './images/Darjeeling.jpg';
import Ladakh from './images/Ladakh.jpg';
import Manali from './images/Manali.jpg';
import Udaipur from './images/Udaipur.jpg';
import Ooty from './images/Ooty.jpg';



import 'swiper/css';
function App() {
  return (
    
    <main>
      <header>
      <a href="" className="logo" >
        
      </a>
        
        <nav>
        
          <a href="">Login</a>
          <a href="">Sign up</a>
        </nav>

      </header>
      <section className="home">
         <div className="content">
          <h1>MilesWeGo</h1>
          <h2>Your Adventure Starts Here</h2>
          <h3>Search Bar</h3>

         </div>
      </section>
      <header className='title'>
      <h1>TRENDING DESTINATIONS</h1>

      </header>
      <section className="home1">
        
        
        <div className="content1">

          <div className='trending'><img src={GoaImage}/></div>
          <div className='trending'><img src={DarImage}/></div>
          <div className='trending'><img src={Ladakh}/></div>
          <div className='trending'><img src={Udaipur}/></div>
          <div className='trending'><img src={Manali}/></div>
          <div className='trending'><img src={Ooty}/></div>
        </div>


        
      </section>
      <header className='title'>
        <h1>ACTIVITIES</h1>

      </header>
      <section className='home2'>
        <div className='content2'>
         <div className='swiper-container'>
            <Swiper
              spaceBetween={55}
              slidesPerView={3}
              navigation 
              pagination={{ clickable: true }} 
              modules={[Navigation, Pagination]} 
              onSlideChange={() => console.log('Slide changed')}
              onSwiper={(swiper) => console.log(swiper)}
             
            >
              <SwiperSlide className="swiper-slide">Slide 1</SwiperSlide>
              <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
              <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
              <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
              <SwiperSlide className="swiper-slide">Slide 5</SwiperSlide>
            </Swiper>
          </div>
         
         
              
         
        </div>
      


      </section>
      <header className='title'>
        <h1>INTERESTS</h1>

      </header>
      <section className='home2'>
      <div className='content2'>
         <div className='swiper-container'>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              navigation 
              pagination={{ clickable: true }} 
              modules={[Navigation, Pagination]} 
              onSlideChange={() => console.log('Slide changed')}
              onSwiper={(swiper) => console.log(swiper)}
             
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
          </div>
         
         
              
         
        </div>

      </section>
      <header className='title'>
        <h1>DESTINATION BY REGIONS</h1>
      </header>
      <section className='home3'>
        <div className='content3'>

        </div>

      </section>
      <section className='home4'>
        <div className='content4'></div>
        <div className=' box1'></div>
          

        

      </section>
      <header className='title'>
        <h1>ABOUT INDIA</h1>
      </header>
      <section className='home3'>
        <div className="content5">
          <div className='boxx box1'></div>
          <div className='boxx box2'>
            <div className='boxxx box1'></div>
            <div className='boxxx box2'></div>
          </div>
        </div>

      </section>
      <footer></footer>



    </main>
    
  );
}

export default App;
