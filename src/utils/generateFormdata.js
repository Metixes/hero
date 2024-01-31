export const generateFormdata = (data) => {
  const formdata = new FormData();

  if (!Object.keys(data).length) {
    throw new Error("Empty data object");
  }

  for (const key in data) {
    formdata.append(key, data[key]);
  }

  // for (var pair of formdata.entries()) {
  //   console.log(pair[0] + ", " + pair[1]);
  // }
  return formdata;
};
