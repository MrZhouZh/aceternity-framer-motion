import Meteor from "./Meteor";
import type { MeteorsProps } from "./types";

const Meteors = ({ number = 20, className }: MeteorsProps) => {
  const meteors = new Array(number).fill(true);

  return (
    <>
      {meteors.map((_, idx) => (<Meteor key={`meteor${idx}`} className={className} />))}
    </>
  )
}

export default Meteors;
