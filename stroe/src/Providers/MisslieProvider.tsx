import { createContext, useEffect, useState } from "react";

interface Missil {
  name: string;
  description: string;
  speed: number;
  intercepts: string [];
  price:number
}

interface Props {
  children: React.ReactNode;
}

interface MissilProps {
  misslies: Missil[];
  setMisslies: React.Dispatch<React.SetStateAction<Missil[]>>;
}
export const MisslieContext = createContext<MissilProps>({
  misslies:[],
  setMisslies: () => {},
});

export default function MisslieProvider({ children }: Props) {
  const [misslies, setMisslies] = useState<Missil[]>([]);

  useEffect(() => {
    fetch("http://localhost:7700/missile/all")
      .then((response) => response.json())
      .then((data) => setMisslies(data))
      .catch((error) => console.error("Error data:", error));
  }, []);

  return (
    <>
      <MisslieContext.Provider value={{ misslies, setMisslies }}>
        {children}
      </MisslieContext.Provider>
    </>
  );
}
