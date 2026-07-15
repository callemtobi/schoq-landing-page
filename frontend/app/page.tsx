import Image from "next/image";
import { redirect } from "next/navigation";
import Main from "@/app/components/Main";
// import Ideas from "@/components/Ideas";
// import Launch from "@/components/Launch";
// import OneTeam from "@/components/OneTeam";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Main />
      {/* <Ideas />
      <Launch />
      <OneTeam /> */}
    </main>
  );
}
