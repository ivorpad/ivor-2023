import { MainArticle } from "@/components/MainArticle";
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin,
} from "@tabler/icons-react";

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
        <section className="flex gap-4">
          <a href="https://github.com/ivorpad" target="_blank">
            <IconBrandGithub
              className="bg-gray-700/50 rounded-full p-2 hover:bg-gray-500/80"
              size={40}
            />
          </a>
          <a href="https://twitter.com/madebyivor" target="_blank">
            <IconBrandTwitter
              className="bg-gray-700/50 rounded-full p-2 hover:bg-gray-500/80"
              size={40}
            />
          </a>
          <a href="https://linkedin.com/in/ivorpad" target="_blank">
            <IconBrandLinkedin
              className="bg-gray-700/50 rounded-full p-2 hover:bg-gray-500/80"
              size={40}
            />
          </a>
        </section>
      </section>
    </main>
  );
}
