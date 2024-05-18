import AsyncStorage from '@react-native-async-storage/async-storage';
import { serviceConfig } from '../serviceConfig';


export const handleSignIn =async (form: { Email: any; Password: any; }, navigation: { navigate: (arg0: string) => void; }) => {
  const { Email, Password } = form;
  let JSONbody, CourierNumber; 
  const atIndex = Email.indexOf('@');
  if (atIndex === -1) {
    CourierNumber = Email;
    JSONbody = JSON.stringify({ CourierNumber, Password });

  } else {
    JSONbody = JSON.stringify({ Email, Password });
  }

  try {
    const response = await fetch(`${serviceConfig}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONbody,
    });
    const text = await response.text();
    const data = JSON.parse(text);
    if (data.token) {
      await AsyncStorage.setItem('token', data.token);
      navigation.navigate('UserViewScreen');
    } else {
      console.error('Brak tokena JWT w odpowiedzi serwera');
    }
  } catch (error) {
    console.error('Błąd:', error);
  }
};
