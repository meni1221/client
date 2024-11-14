import { useContext } from "react";
import PageHeader from "../components/PageHeader";
import { MisslieContext } from "../Providers/MisslieProvider";

interface Missil {
  name: string;
  description: string;
  speed: number;
  intercepts: number;
  price:number
}



export default function DisplayMissiles() {
  const { misslies, setMisslies } = useContext(MisslieContext);


  const Buy = (name: string) => {
    setMisslies((misslies) => {
      return misslies.filter((misslie) => misslie.name !== name);
    });
  };
  return (
    <>
      <PageHeader title="Misslies pages" subtitle="welcome to Misslies pages" />
      <br />
      {misslies!.map((missile) => (
        <div className="card" key={missile.name}>
          <h3> {missile.name}</h3>
          <p> {missile.description}</p>
          <p> {missile.speed}</p>
          <p> {missile.intercepts}</p>
          <p> {missile.price}</p>
          <button
            onClick={() => {
              ;
            }}
          >
            Buy
          </button>
        </div>
      ))}
    </>
  );
}
