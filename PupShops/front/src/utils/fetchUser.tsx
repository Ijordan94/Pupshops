import {
  IAppointment,
  ILoginResponse,
  ILoginUser,
  IUserRegister,
} from "@/Interfaces/interfaces";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchRegisterUser = async (user: IUserRegister) => {
  console.log('Datos del usuario a enviar:', user);

  const response = await fetch(`http://localhost:3001/auth/signup`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
  });

  if (!response.ok) { // Comprueba si la respuesta no es exitosa
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error desconocido'); // Lanza un error con el mensaje recibido
  }

  const data = await response.json();
  return data;
}


// Función para iniciar sesión
export const login = async (credentials: ILoginUser): Promise<ILoginResponse> => {
  try {
    const response = await fetch("http://localhost:3001/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Login failed:", errorData);
      return { success: false, token: "", findUser: null }; // Indica que el login falló
    }

    const data = await response.json();
    console.log("Response data from login:", data);
    
    return {
      success: data.success,
      token: data.token,
      findUser: data.findUser,
    };
    
  } catch (error) {
    console.error("Error during login request:", error);
    return { success: false, token: "", findUser: null }; // Error de conexión
  }
};

export const fetchAppointment = async (appointment: IAppointment) => {
  const response = await fetch(`http://localhost:3001/appointments/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(appointment),
  });
  const data = await response.json();
  console.log("Response data from appointment:", appointment);
  return data;
};


//Modificar perfil 
export const updateUserData = async (userId: string, data: object) => {
  const response = await fetch(`http://localhost:3001/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Error al actualizar el perfil');
  }

  return await response.json();
};
