import { Layout } from "@/components/layout/layout";

export const PortfoliosPage = () => {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-start w-full min-h-screen gap-12">
        <h1 className="text-4xl font-bold text-center">Portfolio</h1>
        <p className="text-center">
          Here are some of the projects I've worked on.
        </p>
      </main>
    </Layout>
  );
};
