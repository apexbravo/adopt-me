import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
    </div>
  );
};
render(<App />, document.getElementById("root"));
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Bird",
//     }),
//     React.createElement(Pet, {
//       name: "Fluffy",
//       animal: "Cat",
//       breed: "Mix",
//     }),
//   ]);
// };
// render(React.createElement(App), document.getElementById("root"));
// ``;
