import Performances from "../components/home/Performances";
import PerformanceGallery from "../components/home/PerformanceGallery";
import VideoHighlights from "../components/home/VideoHighlights";
import HomeCTA from "../components/home/HomeCTA";

export default function PerformancesPage() {
  return (
    <main className="min-h-screen bg-[#0d0808] pt-20 text-[#36272a]">
      <Performances />
      <PerformanceGallery />
      <VideoHighlights />
      <HomeCTA />
    </main>
  );
}
