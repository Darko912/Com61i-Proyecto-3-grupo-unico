import Swal from "sweetalert2";

export const alertSuccess = (message, title, action) => {
  Swal.fire({
    title: title,
    text: message,
    icon: "success",
    confirmButtonColor: "#3085d6",
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: true,
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: "OK",
    focusConfirm: true,
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload();
    }
  });
};

export const alertError = (message, title, action) => {
  Swal.fire({
    title: title,
    text: message,
    icon: "error",
    confirmButtonColor: "#3085d6",
  }).then((result) => {
    if (result.isConfirmed && typeof action === 'function') {
      action(); // Call the action function if it's defined and confirmed by the user
    }
  });
};