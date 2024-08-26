export const generateRandomID = (length = 4) => {
  // Function to generate a random ID
  const generateID = () =>
    Math.random()
      .toString(36)
      .slice(2, 2 + length)
      .toUpperCase();

  // Function to check if the ID exists in the list of previously used IDs
  const isIDUnique = (id, previousIds) => !previousIds.includes(id);

  // Retrieve previously used IDs from localStorage
  const getPreviousIDs = () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    return todos.map((todo) => todo.id); // Adjust 'id' if your key name is different
  };

  // Generate a unique ID
  const generateUniqueID = () => {
    const previousIds = getPreviousIDs();
    let newID;

    do {
      newID = generateID();
    } while (!isIDUnique(newID, previousIds));

    return newID;
  };

  return generateUniqueID();
};
