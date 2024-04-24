import React from "react";
import './Workshop.css';

function Workshop() {
   return (
      <div className="mainWork">
         <div className="title">
            <h2>Oficinas</h2>
         </div>

         <div className="oficinas">
            <div className="card1">
               <img src="https://img.freepik.com/vetores-gratis/padrao-ciencia-rabisco_23-2147492328.jpg?t=st=1713717059~exp=1713720659~hmac=5f2fd2a1859b160385b750f88d96bdf7644ff4a27bb4670ce81fedb7127a2042&w=740" alt="imagem" />
               <div className="descWork">
                  <h3>Oficina 1</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo labore, earum rem sint voluptatem assumenda perferendis dolorem cupiditate voluptates quo?
                  </p>
               </div>
            </div>
            <div className="card2">
               <img src="https://img.freepik.com/vetores-gratis/padrao-ciencia-rabisco_23-2147492328.jpg?t=st=1713717059~exp=1713720659~hmac=5f2fd2a1859b160385b750f88d96bdf7644ff4a27bb4670ce81fedb7127a2042&w=740" alt="imagem" />
               <div className="descWork">
                  <h3>Oficina 1</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste fuga odit aut nisi error dolores? Et exercitationem fugit consectetur eum.</p>
               </div>
            </div>
            <div className="card2">
               <img src="https://img.freepik.com/vetores-gratis/padrao-ciencia-rabisco_23-2147492328.jpg?t=st=1713717059~exp=1713720659~hmac=5f2fd2a1859b160385b750f88d96bdf7644ff4a27bb4670ce81fedb7127a2042&w=740" alt="imagem" />
               <div className="descWork">
                  <h3>Oficina 1</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos velit reiciendis amet error. Quibusdam dolorum modi dolore ea dignissimos!</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Workshop;   