import Layout from "./layout";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout home>
      <h1>Home</h1>
    </Layout>
  );
}
