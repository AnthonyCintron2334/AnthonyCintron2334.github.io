Swal.fire({
    title: "Restriccion de Edad",
    text:"Tienes 21 anos?",
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
          title: "Sitio NO Apto",
          text: "No tienes la edad necesaria para acceder a esta pagina",
          icon: "error"
        });
    }
  });
