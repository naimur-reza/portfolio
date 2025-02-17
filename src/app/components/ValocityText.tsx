import { VelocityScroll } from "./UI/ParallaxText";

const ValocityText = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <VelocityScroll
        defaultVelocity={2.2}
        numRows={1}
        className="text-white/90 "
      >
        Digital Designer + Creative Developer
      </VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
};

export default ValocityText;
