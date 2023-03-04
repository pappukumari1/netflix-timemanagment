
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const  DemoCarousel= ({name,list})=>{
    // showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}
        return (
            <div>
                <h2 style={{color:"white"}}>{name}</h2>
              <Carousel
 DemoCarousel
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
     
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      
    }
  }}
 
>
 
{list.map((data, index) => {
    return (
        
        <div key={index} >
        
            <img src={data.imge} 
            role="button" className='zoom' />
            <div style={{ position: "absolute",
  top: "50%",
  left: "50%",
  transform:" translate(-50%, -50%)"}}
   >
              <p style={{color:"white"}}>{data.title}</p>
              <p style={{color:"white"}}>{data.description}</p>
            </div>
            
        </div>
       
    )
})
}

</Carousel>
      
</div>         

        );
    
};
export default DemoCarousel;
