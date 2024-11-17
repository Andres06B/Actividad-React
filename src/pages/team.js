import React, { useState } from 'react';
import '../styles/team.css';

function Team() {
    const miembros = [
        { id: 1, nombre: 'Andres Berrio', rol: 'Frontend Developer', descripcion: 'Specialist in Angular and Bootstrap for dynamic interface design.', imagen: '/images/andres.jpg' },
        { id: 2, nombre: 'Alejandro Davila', rol: 'Frontend Developer', descripcion: 'Expert in JavaScript, HTML, CSS, and Tailwind for effective visual interfaces.', imagen: '/images/Alejandro.jpeg' },
        { id: 3, nombre: 'Eduardo Solano', rol: 'Backend Developer', descripcion: 'Develops solutions with Go, JavaScript, and Java, optimizing performance.', imagen: '/images/eduardo.jpeg' },
        { id: 4, nombre: 'Manuel Ruiz', rol: 'Data Specialist (DB)', descripcion: 'Advanced database management with Oracle, MySQL, and more.', imagen: '/images/manuel.jpeg' },
        { id: 5, nombre: 'Milton Berrio', rol: 'Data Specialist (DB)', descripcion: 'Advanced database management with Oracle, MySQL, and more.', imagen: '/images/milton.jpeg' },
    ];

    const [miembroSeleccionado, setMiembroSeleccionado] = useState(null);

    const toggleMiembroSeleccionado = (miembro) => {
        setMiembroSeleccionado((prev) => (prev && prev.id === miembro.id ? null : miembro));
    };

    return (
        <div>
            <div className="equipo-container">
                <h1>Our Team</h1>
                <div className="tarjetas-container">
                    {miembros.map((miembro) => (
                        <div key={miembro.id} className="tarjeta">
                            <img src={miembro.imagen} alt={miembro.nombre} className="imagen-tarjeta" />
                            <h2>{miembro.nombre}</h2>
                            <p className="rol"><i className="fas fa-user-tag"></i> {miembro.rol}</p>
                            <button className="ver-perfil-btn" onClick={() => toggleMiembroSeleccionado(miembro)}>
                                {miembroSeleccionado && miembroSeleccionado.id === miembro.id ? 'Hide profile' : 'See profile'}
                            </button>
                        </div>
                    ))}
                </div>

                {miembroSeleccionado && (
                    <div className="detalle-miembro">
                        <h2>Details of {miembroSeleccionado.nombre}</h2>
                        <img src={miembroSeleccionado.imagen} alt={miembroSeleccionado.nombre} className="imagen-detalle" />
                        <p><strong>Role:</strong> {miembroSeleccionado.rol}</p>
                        <p><strong>Description:</strong> {miembroSeleccionado.descripcion}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Team;
