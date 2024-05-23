import {serviceConfig} from "../serviceConfig";

//Service Miejscowości i adresów
export const fetchVillages = async () => {
    try {
        const response =  await fetch(`${serviceConfig}/villages`)
    if (!response.ok) {
        throw new Error('Nie można pobrać danych o miejscowości');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Błąd podczas pobierania listy miejscowości:', error);
      throw new Error('Błąd podczas pobierania danych o miejscowościach');
    }
  };
  
  export const fetchAdresses = async (villageId: string) => {
    try {
        const response =  await fetch(`${serviceConfig}/adresses?villageId=${villageId}`)
    if (!response.ok) {
        throw new Error('Nie można pobrać danych o miejscowości');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Błąd podczas pobierania listy miejscowości:', error);
      throw new Error('Błąd podczas pobierania danych o miejscowościach');
    }
  };

  //Service dodawania miejscowości
  export const createVillage = async (villageData: any) => {   
    try{
        const response = await fetch(`${serviceConfig}/villages`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(villageData)
          });    
          if (response.ok) {
            return true;
          } else {
            throw new Error('Błąd podczas tworzenia usuwania');
          }
        } catch (error) {
          console.error(error);
          throw new Error('Wystąpił błąd podczas usuwania');
        }
      };

  //Service modyfikacji miejscowości
  export const updateVillage = async (villageData: any) => {
    try {
      const response = await fetch(`${serviceConfig}/villages/${villageData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(villageData)
      });
  
      if (response.ok) {
        return true; // Jeśli aktualizacja zakończyła się sukcesem, zwróć true
      } else {
        throw new Error('Błąd podczas aktualizacji miejscowości');
      }
    } catch (error) {
      console.error(error);
      throw new Error('Wystąpił błąd podczas aktualizacji danych użytkownika');
    }
  };

  //Service usuwania pojazdów 

  export const removeVillage = async (VillageId: string) => {
    try {
      const response = await fetch(`${serviceConfig}/villages/${VillageId}`, {
        method: 'DELETE'
      });
  
      if (response.ok) {
        return true;
      } else {
        throw new Error('Błąd podczas usuwania miejscowości');
      }
    } catch (error) {
      console.error(error);
      throw new Error('Wystąpił błąd podczas usuwania miejscowości');
    }
  };
  

  //Service zmiany pojazdu przez usera
