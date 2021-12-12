function indexOfSameAtt(searchElement, searchList) {
  let result = -1;
  let counter = 0;

  searchList.forEach((element) => {
    if (JSON.stringify(element) === JSON.stringify(searchElement)) {
      result = counter;
    }
    counter++;
  });

  return result;
}

export { indexOfSameAtt };
