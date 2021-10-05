import {React,useState} from 'react';
import { Link } from 'react-router-dom';
//Components
import BtnSlider from './BtnSlider'
// Config
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';
// Hook
import { useSliderFetch } from '../../hooks/useSliderFetch';
// Image
//import NoImage from '../../images/no_image.jpg';

const Data = () => {
  const {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore
  } = useSliderFetch();

  console.log(state.results[0]);

var dataSlider = state.results.slice(0,12);


    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }





  if (error) return <div>Something went wrong ...</div>;

  return (
    <div className="container-slider">
        {dataSlider.map((obj, index) => {
               
           return (
              <Link to={`/movie/${obj.id}`}>
              <div
                 key={obj.id}
                 className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                >
                <p id="movie_title">
                {obj.title +" (" + obj.release_date.slice(0,4) + ")"}
                </p>
                <img id="S_Backdrop"
                  src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${obj.backdrop_path}`}
                 alt = "poster"/>
                </div>
                </Link>
                
                
           
            )
         
        })}
        
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 12}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
    
    
    </div>
    
    
    
    
      //{!searchTerm && state.results[0] ? (
       //<HeroImage
        //  image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
         // title={state.results[0].original_title}
        //  text={state.results[0].overview}
        ///>
      // <Slider popular=''/>
      
    //  ) : null}
      
    );
};


export default Data;
