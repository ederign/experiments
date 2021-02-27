import faker from "faker";

const mount = (el) => {
  const cartText = `<div> You have ${faker.random.number()} items in your cart</div>`;
  el.innerHTML = cartText;
  //ReactDOM.render(<App />, el)
};

//development mode of products microfrontend
if (process.env.NODE_ENV === "development") {
  const devDiv = document.getElementById("dev-cart");
  if (devDiv) {
    mount(devDiv);
  }
}

export { mount };
