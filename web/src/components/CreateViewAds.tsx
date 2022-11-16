import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useFetch } from "../hooks/useFetch";

interface GameView {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

interface Props {
  data: GameView;
}

export function CreateViewAds({ data: GameView }: Props) {
  return <h1>{GameView.title}</h1>;
}
