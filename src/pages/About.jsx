import Tradition from "../components/home/Tradition";
import Founder from "../components/home/Founder";
import Recognition from "../components/home/Recognition";

function About() {
  return (
    <main className="bg-[#0d0808] pt-20 text-[#f8f0e3]">
      <Tradition />
      <Founder />
      <Recognition />
    </main>
  );
}

export default About;
