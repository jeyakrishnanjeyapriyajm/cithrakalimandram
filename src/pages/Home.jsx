import Hero from "../components/home/Hero";
import Heritage from "../components/home/Heritage";
import SchoolSong from "../components/home/SchoolSong";
import VideoHighlights from "../components/home/VideoHighlights";

function Home() {
  return (
    <main className="min-h-screen bg-[#eee1d0] text-[#36272a]">
      <Hero />
      <Heritage />
      <SchoolSong />
      <VideoHighlights />
    </main>
  );
}

export default Home;
