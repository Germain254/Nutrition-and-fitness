import React from "react";

 

const Carousel = () => {
return (
<section className="container-fluid row">
<div className="col-md-12">
<div id="mycarousel" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-inner">
<div className="carousel-item active">
<img src="/equipment.png" className="d-block w-100" style={{height:"300px", objectFit:"contain"}} alt="Slide 1" />
</div>
{/* src="/banner1.webp" */}
<div className="carousel-item">
<img src="/accessories.png" className="d-block w-100" style={{height:"300px", objectFit:"contain"}} alt="Slide 2" />
</div>
<div className="carousel-item">
<img src="/clothing.png" className="d-block w-100" style={{height:"300px", objectFit:"contain"}} alt="Slide 3" />
</div>
</div>
 

<a className="carousel-control-prev" href="#mycarousel" role="button" data-bs-slide="prev">
<span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
<span className="visually-hidden">Previous</span>
</a>
<a className="carousel-control-next" href="#mycarousel" role="button" data-bs-slide="next">
<span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
<span className="visually-hidden">Next</span>
</a>
</div>
</div>
</section>
);
};
 

export default Carousel;