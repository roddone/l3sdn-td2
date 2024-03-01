import forfaits from "./forfait/forfaits.js";
import portables from "./portable/portables.js";
import tablettes from "./tablette/tablettes.js";

const data = [
  {
    id: 1,
    name: "forfaits",
    list: forfaits,
    
  },
  {
    id: 2,
    name: "portables",
    list: portables,
  },
    {
    id: 3,
    name: "tablettes",
    list: tablettes,
  },
];

export default data;