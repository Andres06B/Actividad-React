import React, { useState } from 'react';
import '../styles/services.css';

const Services = () => {
    const servicios = [
        { 
            id: 1, 
            titulo: "Coresys", 
            descripcion: "Innovative technological solutions for companies.", 
            imagen: '/images/logocoresys.png',
            detalles: "Coresys specializes in developing tailored administrative systems designed to meet the unique needs of businesses. Our mission is to provide innovative and efficient technological solutions that enhance productivity, streamline operations, and empower organizations to achieve their goals.With a commitment to understanding your specific requirements, we create customized management platforms that integrate seamlessly with your processes. Whether it's optimizing workflow, improving data management, or enabling smarter decision-making, Coresys is dedicated to delivering results that drive success"
        },
        { 
            id: 2, 
            titulo: "New Iguanas House", 
            descripcion: "Hotel Services.", 
            imagen: '/images/Imagen1.png',
            detalles: "New Iguanas House is a leading hospitality company offering exceptional services and accommodations to its guests. To elevate its operations and enhance the guest experience, we at Coresys developed their comprehensive website. This platform not only showcases their offerings but also integrates all their services seamlessly, from room bookings to customer inquiries."
        },
    ];

    const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

    const toggleServicioSeleccionado = (servicio) => {
        setServicioSeleccionado((prev) => (prev && prev.id === servicio.id ? null : servicio));
    };

    return (
        <div className="servicios-container">
            <h1>Services & Products</h1>
            <div className="tarjetas-container">
                {servicios.map((servicio) => (
                    <div key={servicio.id} className="tarjeta">
                        <img src={servicio.imagen} alt={servicio.titulo} className="imagen-tarjeta" />
                        <h2>{servicio.titulo}</h2>
                        <p className="descripcion-tarjeta">{servicio.descripcion}</p>
                        <button 
                            className="ver-detalle-btn" 
                            onClick={() => toggleServicioSeleccionado(servicio)}
                        >
                            {servicioSeleccionado && servicioSeleccionado.id === servicio.id ? 'Hide Details' : 'View Details'}
                        </button>
                    </div>
                ))}
            </div>

            {servicioSeleccionado && (
                <div className="detalle-servicio">
                    <h2>{servicioSeleccionado.titulo}</h2>
                    <img src={servicioSeleccionado.imagen} alt={servicioSeleccionado.titulo} className="imagen-detalle" />
                    <p><strong>Details:</strong> {servicioSeleccionado.detalles}</p>
                </div>
            )}
        </div>
    );
};

export default Services;
