import Swal from "sweetalert2";
export const Alert = (text: string) => {
  Swal.fire({
    icon: "error",
    title: "Error..",
    text: text,
    width: "100%",
    showClass: {
      popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
    },
    hideClass: {
      popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
    },
  });
};
