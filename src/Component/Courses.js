import React from 'react';
import London from './images/london.png';
import Washington from './images/washington.png';
import Newyork from './images/newyork.png';
import Style from "./Style.css";
import Users from './images/user2.jpg'
function Courses() {
  return (
    <div>
          <section className="course">
        <h1>Courses We Offer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nihil adipisci quaerat! Corrupti alias voluptates quibusdam ducimus? Saepe ullam quae, consectetur nobis aspernatur earum provident repudiandae enim ut facere eos?</p>
        <div className="row">
            <div className="course-col">
                <h3>Javascript full stack</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus mollitia consequuntur est beatae architecto cupiditate illum ipsa repellendus expedita dicta vel, adipisci fuga, omnis accusantium, eveniet maiores tenetur cumque aspernatur!</p>
            </div>
            <div className="course-col">
                <h3>Javascript full stack</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus mollitia consequuntur est beatae architecto cupiditate illum ipsa repellendus expedita dicta vel, adipisci fuga, omnis accusantium, eveniet maiores tenetur cumque aspernatur!</p>
            </div>
            <div className="course-col">
                <h3>Javascript full stack</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus mollitia consequuntur est beatae architecto cupiditate illum ipsa repellendus expedita dicta vel, adipisci fuga, omnis accusantium, eveniet maiores tenetur cumque aspernatur!</p>
            </div>
        </div>
    </section>
    {/* <!-- tech stack  --> */}

    <section className="tech-stack">
        <h1>Our tech Stack</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nihil adipisci quaerat! Corrupti alias voluptates quibusdam ducimus? Saepe ullam quae, consectetur nobis aspernatur earum provident repudiandae enim ut facere eos?</p>
        <div className="row">
            <div className="stack-col">
                <img src={London} alt="" />
                <div className="layer">
                    <h3>REACT</h3>
                </div>
            </div>
            <div className="stack-col">
                <img src={Washington} alt="" />
                <div className="layer">
                    <h3>REACT</h3>
                </div>
                
            </div>
            <div className="stack-col">
                <img src={Newyork} alt="" />
                <div className="layer">
                    <h3>REACT</h3>
                </div>  
            </div>
        </div>
    </section>

    {/* <!-- Testimmonials section --> */}

    <section className="testimonials">
        <h1>What our students say</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum velit vitae aperiam incidunt illo quis unde delectus pariatur quasi, nisi repellendus ipsum facere dolorum repellat eos rem totam. Iste, alias!</p>

        <div className="row">
            <div className="testimonial-col">
                <img src={Users} alt="" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorem eaque cupiditate facere? Minima repudiandae ipsam aperiam ullam quae necessitatibus laborum voluptas adipisci, et temporibus explicabo. Suscipit nam accusamus illo.</p>
                    <h3>Parth</h3>
                </div>
            </div>
            <div className="testimonial-col">
             <img src={Users} alt="" />
            <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorem eaque cupiditate facere? Minima repudiandae ipsam aperiam ullam quae necessitatibus laborum voluptas adipisci, et temporibus explicabo. Suscipit nam accusamus illo.</p>
                    <h3>Parth</h3>
                </div>
            </div>
        </div>
    </section>


    </div>
  )
}

export default Courses
