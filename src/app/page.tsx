import { MainArticle } from "@/components/MainArticle";
import Image from "next/image";
import { Social } from "../components/Social";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="my-24 flex flex-col gap-4">
        <Image
          src="/ivor.png"
          alt="Ivor Padilla's Thumb"
          className="rounded-full ring-gray-300 dark:ring-gray-800/90 ring-4"
          width={80}
          height={80}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABrUlEQVR4nO3aQW7CQBCF4X9/9+Q"
        />
        <MainArticle />
        <Social></Social>
      </section>
    </main>
  );
}
