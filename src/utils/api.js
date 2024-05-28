// utils/api.js
export const fetchNotes = async () => {
  const response = await fetch('/api/notes');
  const data = await response.json();
  return data;
};
