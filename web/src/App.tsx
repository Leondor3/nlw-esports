import { useState, useEffect } from "react";

import * as Dialog from "@radix-ui/react-dialog";

import "./styles/main.css";
import LogoImg from "./assets/logo-nlw-esports.svg";
import { GameBanner } from "./components/GamerBanner";
import { CreatedAdBanner } from "./components/CreatedAdBanner";
import { GameController } from "phosphor-react";
import { Input } from "./components/Form/input";
import { useFetch } from "./hooks/useFetch";
import { CreateAdModal } from "./components/CreateAdModal";
import { CreateViewAds } from "./components/CreateViewAds";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

interface Props {
  data: Game;
  onConnect: () => void;
}

function App({ data, ...rest }: Props) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
    },
  });

  const { data: games } = useFetch<Game[]>("http://localhost:3333/games");

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={LogoImg} />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient text-transparent bg-clip-text">
          duo
        </span>{" "}
        está aqui
      </h1>

      <div ref={ref} className="grid grid-cols-6 gap-6 mt-16 keen-slider">
        {games?.map((game) => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerURL={game.bannerUrl}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <CreatedAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
