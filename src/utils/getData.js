const getData = async (url) => {

  const data = (await fetch(url)).json();
  return data;
};

export default getData;
