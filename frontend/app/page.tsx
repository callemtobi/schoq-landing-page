import Main from "@/app/components/Main";
import Ideas from "@/components/Ideas";
import Launch from "@/components/Launch";
import OneTeam from "@/components/OneTeam";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { heroBgImage } from "@/public";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <div
        style={{ backgroundImage: `url(${heroBgImage.src})` }}
        className="bg-cover bg-center bg-no-repeat"
      >
        <Header />
        <Main />
      </div>
      <Launch />
      <OneTeam />
      <Ideas />
      <Footer />
    </main>
  );
}
