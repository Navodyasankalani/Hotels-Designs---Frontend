import React, { useState }  from 'react'
import OffersCardDetails from './OffersCardDetails'
import "../CompHilton/ExperienceCardsForm.css"

function OffersCard() {
    //const name="navodya";

    const [detail, setDetail] = useState(OffersCardDetails);

 
  return (
    <>

<section className="property">

<div className="center">
<h3>Offers</h3>
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

            <div className="property-content">
                <h3>{detail.heading}</h3>
                <div className="mark">
                  <i class="fa-solid fa-location-dot"></i>
                   <span>{detail.span}</span>
                </div>
                <span className="amount">{detail.amount}</span>
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
  )
}

export default OffersCard