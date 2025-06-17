import axios from 'axios';

// Simula una función para obtener productos desde el archivo JSON local
export async function fetchProducts() {
  // Simulación de retardo de red
  await new Promise(res => setTimeout(res, 500));
  const response = await axios.get('/src/db/products.json');
  return response.data;
}

// Simula una función para obtener imágenes del carrusel desde el archivo JSON local
export async function fetchCaruselImages() {
  // Simulación de retardo de red
  await new Promise(res => setTimeout(res, 500));
  const response = await axios.get('/src/db/caruselImages.json');
  return response.data;
}

// Simula una función para obtener promociones desde el archivo JSON local
export async function fetchPromotions() {
  // Simulación de retardo de red
  await new Promise(res => setTimeout(res, 500));
  const response = await axios.get('/src/db/promotions.json');
  return response.data;
}

// Simula una función para obtener promociones desde el archivo JSON local
export async function fetchCompanyInfo() {
  // Simulación de retardo de red
  await new Promise(res => setTimeout(res, 500));
  const response = await axios.get('/src/db/companyInfo.json');
  return response.data;
}