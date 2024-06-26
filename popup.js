Swal.fire({
    title: "Restricción de Edad",
    text:"¿Tienes 21 años?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "SI",
    cancelButtonText:"NO",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Cumples con la edad",
        text: "Excelente puedes navegar sin problemas",
        icon: "success"
      });
    } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Sitio NO Apto para menores",
          text: "No tienes la edad necesaria para acceder a esta página, se recomienda discreción",
          icon: "error"
        }).then(() => {
          // Aquí puedes agregar la acción que desees, como redirigir al usuario a otra página o cerrar la ventana del navegador
          window.location.href = "www.nopuedesentrareresmenor.NOP"; // Redirige a otra página
          // window.close(); // Cierra la ventana del navegador (ten en cuenta que esto podría ser bloqueado por el navegador)
        });;
    }
  });
