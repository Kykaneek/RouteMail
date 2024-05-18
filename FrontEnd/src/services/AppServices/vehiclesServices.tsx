import { serviceConfig } from "../serviceConfig";

//Service wyświetlania pojazdów
export const fetchVehicles = async () => {
    try {
        const response =  await fetch(`${serviceConfig}/vechicles`)
    if (!response.ok) {
        throw new Error('Nie można pobrać danych użytkowników');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Błąd podczas pobierania listy pojazdów:', error);
      throw new Error('Błąd podczas pobierania danych użytkowników');
    }
  };

  //Service dodawania pojazdów
  export const createVehicle = async (vehicleData: any) => {   
    try{
        const response = await fetch(`${serviceConfig}/vechicles`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(vehicleData)
          });    
          if (response.ok) {
            return true; // Jeśli aktualizacja zakończyła się sukcesem, zwróć true
          } else {
            throw new Error('Błąd podczas tworzenia usuwania');
          }
        } catch (error) {
          console.error(error);
          throw new Error('Wystąpił błąd podczas usuwania');
        }
      };

  //Service modyfikacji pojazdów
  export const updateVehicle = async (vehicleData: any) => {
    try {
      const response = await fetch(`${serviceConfig}/vechicles/${vehicleData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(vehicleData)
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

  //Service usuwania pojazdów 

  export const removeVehicle = async (VehicleId: string) => {
    try {
      const response = await fetch(`${serviceConfig}/vechicles/${VehicleId}`, {
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
  

  //Service zmiany pojazdu przez usera
