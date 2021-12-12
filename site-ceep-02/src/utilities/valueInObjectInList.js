function valueInObjectInList(value, list, objectProperty) {
  let result = false;

  list.forEach((object) => {
    if (object[objectProperty] === value) {
      result = object;
    }
  });

  return result;
}

export { valueInObjectInList };
