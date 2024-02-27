import forfaits from "./forfait/forfaits.js";
import portables from "./portable/portables.js";
import tablettes from "./tablette/tablettes.js";

const data = [
  {
    id: 1,
    name: "forfaits",
        data: forfaits,
    
  },
  {
    id: 2,
    name: "portables",
    data: portables,
  },
    {
    id: 3,
    name: "tablettes",
    data: tablettes,
  },
];

export default data;
//const picture = "./src/data/portable" + data[1].data[0].photo;
// exemple pour acceder à la photo depuis n'importe quel fichier