import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();

    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
  //ReactDOM.render(<App />, el)
};

//development mode of products microfrontend
if (process.env.NODE_ENV === "development") {
  const devDiv = document.getElementById("dev-products");
  if (devDiv) {
    mount(document.getElementById("dev-products"));
  }
}

export { mount };
