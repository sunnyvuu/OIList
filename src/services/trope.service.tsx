import { Trope } from "../interfaces/trope";

export const getTropes = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/tropes");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const postTrope = async (tropeData: Trope) => {
  try {
    const response = await fetch("http://localhost:3000/api/tropes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tropeData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error, status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};
