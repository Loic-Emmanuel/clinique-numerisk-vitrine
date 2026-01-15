import axios from 'axios';

// Créez une instance Axios avec configuration de base
const apiClient = axios.create({
  baseURL: 'http://192.168.1.121:8080/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Intercepteur pour gérer les erreurs globalement
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('Erreur API:', error);
    
    if (!error.response) {
      // Pas de réponse du serveur
      console.error('Serveur injoignable');
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;