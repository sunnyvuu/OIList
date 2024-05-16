export const getManhwas = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/manhwas");
    if (!response.ok) {
      throw new Error(`HTTP error! status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
