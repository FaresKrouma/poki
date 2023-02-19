import { FaLeaf, FaHatWizard, FaFire } from "react-icons/fa";
import { GiRock, GiElectric, GiPoisonBottle } from "react-icons/gi";
import { BiGhost } from "react-icons/bi";
import { MdWaterDrop, MdCatchingPokemon } from "react-icons/md";
import { IoBug } from "react-icons/io5";

const typesIcons = {
  water: <MdWaterDrop className="icons" style={{ color: "#566df3" }} />,
  ground: <GiRock className="icons" style={{ color: "brown" }} />,
  electric: <GiElectric className="icons" style={{ color: "#ffa500" }} />,
  ghost: <BiGhost className="icons" style={{ color: "gray" }} />,
  fire: <FaFire className="icons" style={{ color: "tomato" }} />,
  fairy: <FaHatWizard className="icons" style={{ color: "purple" }} />,
  grass: <FaLeaf className="icons" style={{ color: "#3d9e40" }} />,
  bug: <IoBug className="icons" style={{ color: "#bd462c" }} />,
  poison: <GiPoisonBottle className="icons" style={{ color: "#9048c9" }} />,
  normal: <MdCatchingPokemon className="icons" style={{ color: "#237265" }} />,
};

export default function PokemonCard({ name, img, types, id, height, weight }) {
  const style = types[0].type.name + " card-container";
  return (
    <li key={id} className={style}>
      <img className="poki-img" src={img} alt={name} />
      <small className="poki-id">#{id}</small>
      <h3 className="poki-name">{name}</h3>
      <div className="types-container">
        {types.map((item) => (
          <span title={item.type.name} key={item.type.name}>
            {typesIcons[item.type.name]}{" "}
          </span>
        ))}
      </div>
    </li>
  );
}
