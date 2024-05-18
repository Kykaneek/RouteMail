import {serviceConfig} from "../serviceConfig";


//Service wyświetlania userów
export const fetchUsers = async () => {
    try {
      const response = await fetch(`${serviceConfig}/users`);
      if (!response.ok) {
        throw new Error('Nie można pobrać danych użytkowników');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Błąd podczas pobierania użytkowników:', error);
      throw new Error('Błąd podczas pobierania danych użytkowników');
    }
  };


//Service Dodawania użytkownika 

export const createUser = async (userData: any) => {   
    try{
        const response = await fetch(`${serviceConfig}/users`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
          });    
          if (response.ok) {
            return true; // Jeśli aktualizacja zakończyła się sukcesem, zwróć true
          } else {
            throw new Error('Błąd podczas tworzenia użytkownika');
          }
        } catch (error) {
          console.error(error);
          throw new Error('Wystąpił błąd podczas tworzenia użytkownika');
        }
      };
  

//Service aktualizacji użytkownika
export const updateUser = async (userData: any) => {
    try {
      const response = await fetch(`${serviceConfig}/users/${userData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
  
      if (response.ok) {
        return true; // Jeśli aktualizacja zakończyła się sukcesem, zwróć true
      } else {
        throw new Error('Błąd podczas aktualizacji danych użytkownika');
      }
    } catch (error) {
      console.error(error);
      throw new Error('Wystąpił błąd podczas aktualizacji danych użytkownika');
    }
  };
  
//Service usuwania użytkowników 

export const removeUser = async (userId: string) => {
    try {
      const response = await fetch(`${serviceConfig}/users/${userId}`, {
        method: 'DELETE'
      });
  
      if (response.ok) {
        return true;
      } else {
        throw new Error('Błąd podczas usuwania użytkownika');
      }
    } catch (error) {
      console.error(error);
      throw new Error('Wystąpił błąd podczas usuwania użytkownika');
    }
  };
  

//Service zmiany hasła
export const changePasswordService = async (userId: string, newPassword: string) => {
    try {
      const response = await fetch(`${serviceConfig}/users/changepassword/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword }),
      });
  
      if (!response.ok) {
        throw new Error('Błąd podczas zmiany hasła');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error(error);
      throw new Error('Wystąpił błąd podczas zmiany hasła.');
    }
  };
  