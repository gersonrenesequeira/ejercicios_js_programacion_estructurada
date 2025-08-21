const universidad = {
  nombre: "Universidad Central",
  ubicacion: {
    ciudad: "Sevilla",
    direccion: {
      calle: "Av. Principal",
      numero: 123
    }
  },
  facultades: [
    {
      nombre: "Ingeniería",
      carreras: [
        {
          nombre: "Informática",
          estudiantes: [
            { nombre: "Laura", edad: 20, hobbies: ["programar", "ajedrez"] },
            { nombre: "Javier", edad: 22, hobbies: ["fútbol", "cine"] }
          ]
        },
        {
          nombre: "Civil",
          estudiantes: [
            { nombre: "Sofía", edad: 21, hobbies: ["fotografía", "leer"] }
          ]
        }
      ]
    },
    {
      nombre: "Derecho",
      carreras: [
        {
          nombre: "Derecho Penal",
          estudiantes: [
            { nombre: "Andrés", edad: 23, hobbies: ["debate", "natación"] }
          ]
        }
      ]
    }
  ]
};

const mostrarDatosUniversidad = (uni) => {
  console.log("Nombre de la universidad:", uni.nombre);
  console.log("Calle donde está ubicada:", uni.ubicacion.direccion.calle);
  console.log("Primera facultad:", uni.facultades[0].nombre);
  console.log("Segunda carrera en la primera facultad:", uni.facultades[0].carreras[1].nombre);
  console.log("Primer estudiante de Informática:", uni.facultades[0].carreras[0].estudiantes[0].nombre);
  console.log("Segundo hobby de Laura:", uni.facultades[0].carreras[0].estudiantes[0].hobbies[1]);
  console.log("Edad de Sofía:", uni.facultades[0].carreras[1].estudiantes[0].edad);
  console.log("Primer hobby del estudiante de Derecho Penal:", uni.facultades[1].carreras[0].estudiantes[0].hobbies[0]);
};

// Aquí se ejecuta la función
mostrarDatosUniversidad(universidad);
