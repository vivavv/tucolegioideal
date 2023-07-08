export const usernameValidation = {
  required: { value: true, message: "El nombre de usuario es requerido" },
};

export const nameValidation = {
  required: { value: true, message: "El nombre es requerido" },
};

export const userValidation = {
  required: { value: true, message: "El usuario es requerido" },
};

export const passwordValidation = {
  required: { value: true, message: "La contraseña es requerida" },
};

const isEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const emailValidation = {
  required: { value: true, message: "El correo es requerido" },
  validate: (value: string) =>
    isEmail(value) || "Por favor ingrese un correo válido",
};
