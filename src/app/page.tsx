import Navbar from "@/components/Navbar";
// import Prism from "@/components/Prism";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      {/* <div
        className="w-full h-screen absolute bg-slate-900 top-0 left-0 -z-1"
      >
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div> */}
    </div>
  );
}
