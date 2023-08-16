import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin
} from "@tabler/icons-react";

export function Social() {
  return (
    <section className="flex gap-4">
      <a href="https://github.com/ivorpad" target="_blank">
        <IconBrandGithub
          className="bg-gray-300 hover:bg-gray-200 dark:bg-gray-700/50 rounded-full p-2 dark:hover:bg-gray-500/80"
          size={40}
        />
      </a>
      <a href="https://twitter.com/madebyivor" target="_blank">
        <IconBrandTwitter
          className="bg-gray-300 hover:bg-gray-200 dark:bg-gray-700/50 rounded-full p-2 dark:hover:bg-gray-500/80"
          size={40}
        />
      </a>
      <a href="https://linkedin.com/in/ivorpad" target="_blank">
        <IconBrandLinkedin
          className="bg-gray-300 hover:bg-gray-200 dark:bg-gray-700/50 rounded-full p-2 dark:hover:bg-gray-500/80"
          size={40}
        />
      </a>
    </section>
  );
}
