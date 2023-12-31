import { useRef } from "react";
import { Note } from "@/types";
import { useAnimation, useAudio, useKeyPress } from "@/hooks";
import { kepatihanSymbolToText } from "@/utils";
import { bonangSvgData } from "../../public/graphics";
import Icon from "./Icon";

interface PotProps {
  note: Note;
  src: string;
  keybind: string;
  showKeybind?: boolean;
}

export default function BonangPot({
  note,
  src,
  keybind,
  showKeybind,
}: PotProps) {
  const startAudio = useAudio(src);

  // register startSound() method on key press
  useKeyPress(keybind, () => startSound());

  const potElement = useRef<null | SVGSVGElement>(null);

  // set up animation
  const startAnimation = useAnimation({
    target: potElement.current as null | HTMLElement,
    animationClass: "animate-pulse",
  });

  return (
    <button
      className="w-full flex relative px-2 py-1 aspect-square rounded-full bg-red-50 flex-col justify-center"
      onClick={startSound}
    >
      <Icon
        svgData={bonangSvgData}
        className="w-full transition-all"
        svgRef={potElement}
      />
      {/* screenreader alt for Bonang SVG */}
      <span className="sr-only">
        {`Bonang Pot ${kepatihanSymbolToText(note)}`}
      </span>
      <p className="absolute bottom-0 flex gap-1 justify-between  text-white ">
        <span
          className="aspect-square rounded-full h-8 w-8 bg-red-800 font-kepatihan hidden sm:block"
          aria-hidden="true"
        >
          {note}
        </span>
        {showKeybind && (
          <span className="h-8 w-8 rounded-full bg-gray-500 pt-1">
            {keybind}
          </span>
        )}
      </p>
    </button>
  );

  function startSound() {
    startAudio();
    startAnimation();
  }
}
