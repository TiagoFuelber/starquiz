import { BASE_URL } from "./baseUrl";

export const getPeopleFromPage = async (page) => {
  const data = await fetch(`${BASE_URL}/people/?page=${page}`);

  return data.json();
};

const PeopleRepository = {
  getPeopleFromPage
};

export default PeopleRepository;
