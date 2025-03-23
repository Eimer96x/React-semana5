import React from "react";
import "./Maquetacion.css";


const Maquetacion = () => {
  // Definir el patrón de colores para el primer bloque
  const bloque1 = ["red", "orange", "orange", "red","red", "orange"];
  const bloque2 = bloque1.map(color => (color === "red" ? "orange" : "red"));

  return (
     <div className="container">
      {/* Bloque 1 */}
      <div className="grid-container">
        {bloque1.map((color, i) => (
          <div key={i} className={`grid-item ${color}`}></div>
        ))}
      </div>

      {/* Bloque 2 (Espejo del bloque 1) */}
      <div className="grid-container">
        {bloque2.map((color, i) => (
          <div key={i} className={`grid-item ${color}`}></div>
        ))}
      </div>
    </div>
  );
};

export default Maquetacion;
