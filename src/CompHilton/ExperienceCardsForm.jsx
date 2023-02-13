import React, { useState }  from 'react'
import ExperienceCardsDetails from './ExperienceCardsDetails'
import "./ExperienceCardsForm.css"

function ExperienceCardsForm() {
    //const name="navodya";

    const [detail, setDetail] = useState(ExperienceCardsDetails);

 
  return (
    <>

<section className="property">

<div className="center">
<h3>Experience Something New</h3>
</div>

<div className="row">

{
    detail.map((detail)=>{
        return(
            <div className="column">
      <div className="single-property">
        <div className="card">

            <div className="property-thumb">
                <img src={detail.Image} alt="Palace" />
            </div>

        </div>
      </div>
    </div>
        )
    })
}

    
</div>


</section>
    </>
    // <div>
    //     <h1>Experience Something New Form</h1>
    //     <h5>
    //         bla bla bla...............
    //     </h5>
    //     <div className="row ">
    //         {name}
    //         <div >
    //         {detail.map((user) =>{ 
    //             return(
    //                 <div className="column">
    //             <div className="single-property">
    //                 <div className="property-thumb">
    //             <div className='mapImage' key={user.id}>
    //     <img src={user.Image} alt="Palace" />
    //     </div>
    //     </div>
    //     </div>
    //     </div>
    //   )
    //   })}
    //         </div>

    //         <img src={detail.Image} alt="Palace" />
 
    //     </div>
    // </div>
  )
}

export default ExperienceCardsForm