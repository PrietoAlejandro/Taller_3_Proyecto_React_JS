import React from "react";
import './opiniones.css'

function Opiniones() 
{
    return (
        <section id="contenopi">
            <div id="titulo"><h1>Nuestros usuarios dicen...</h1></div>
            <div className="alltodo">
                <div id="opinion" >
                    <div className="nombre">
                    <div class="nombre">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCfBdBWeo_usOiHgXZ2Ts7O4qPUfmQGntb6yR-OVklfZNQoeuOe9t1onhCz1KG5fOMVZI&usqp=CAU"/>
                            <h5>Diego rodriguez</h5>
                            <div className="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                    </div>
                    <div className="descripcion">
                        <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.
                            Elit quis enim ultricies ullamcorper.
                            Nunc aenean auctor vel diam dictum.</p>
                    </div>
                    </div>
                </div>
                <div id="opinion1">
                    <div className="nombre1">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGzQ-1v8V_Du6Q3pFow6SVSjxlLaXOebtlw&usqp=CAU"/>
                            <h5>Diana Garcìa</h5>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i v="fas fa-star"></i>
                            </div>
                    </div>
                    <div className="descripcion1">
                        <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.
                            Elit quis enim ultricies ullamcorper.
                            Nunc aenean auctor vel diam dictum.</p>
                    </div>
                </div>
                <div id="opinion">
                    <div className="nombre">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WfPeH24odZ7izx8LdiqMRgnDnvRsteI-QHfQkzl9ye2bJtGDDRsdnQequg5Q5Rr7UhA&usqp=CAU"/>
                            <h5>Diego rodriguez</h5>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                    </div>
                    <div className="descripcion">
                        <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.
                            Elit quis enim ultricies ullamcorper.
                            Nunc aenean auctor vel diam dictum.</p>
                    </div>
                </div>
            </div>
    </section >

    );
}
export default Opiniones;