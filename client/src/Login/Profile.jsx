import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"; // Importa useAuth0

const Profile = () => {
  const { isAuthenticated, logout, user } = useAuth0(); // Extrae isAuthenticated, logout y user desde useAuth0
  
  const handleLogout = () => {
    // Realiza acciones antes de hacer logout, si es necesario
    console.log("Realizando acciones antes de hacer logout...");
    
    // Hacer logout
    logout({ returnTo: window.location.origin });
  };

  return (
    // Mostrar el perfil y el botón de cierre de sesión solo si el usuario está autenticado y se ha cargado la información del usuario
    isAuthenticated && user && (
      <div className={styles.profile_zlksadaskj}>
        {/* Agregar un menú con opciones */}
        <Menu>
          <MenuButton as={Button} variant="flat" colorScheme="gray" size="sm">
            <Image src={user.picture} alt={`profile_${user.name}`} borderRadius="full" boxSize={8} objectFit="cover" />
          </MenuButton>
          <MenuList>
            {/* Enlace al perfil del usuario */}
            <MenuItem as={Link} to="/profile">Perfil</MenuItem>
            {/* Opción para cerrar sesión */}
            <MenuItem onClick={handleLogout} icon={<FiLogOut />} command="⌘L">
              Cerrar sesión
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    )
  );
};

export default Profile;
