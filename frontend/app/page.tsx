import Main from "@/app/components/Main";
import MainAnimation from "@/components/MainAnimation";
import Ideas from "@/components/Ideas";
import Launch from "@/components/Launch";
import OneTeam from "@/components/OneTeam";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Main />
      <Launch />
      <OneTeam />
      <Ideas />
    </main>
  );
}
