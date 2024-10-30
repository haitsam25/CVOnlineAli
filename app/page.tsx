
import Hero from "./components/hero";
import RiwayatPekerjaan from "./components/RiwayatPekerjaan";
import RiwayatPendidikan from "./components/RiwayatPendidikan";
import Skills from "./components/skills";
import "./raflyra-style.css"




export default function Gallery() {
  return (
    <section>
      <Hero/>
      <RiwayatPekerjaan/>
      <RiwayatPendidikan/>
      <Skills/>
</section>
);
}