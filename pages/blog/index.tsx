import Layout from "../layout";
import Link from "next/link";

export default function blog({ data }: { data: any }) {
  return (
    <Layout title="Next Blog">
      <h1>Blog</h1>
      {data.map(({ id, title, body }: { id: any; title: any; body: any }) => (
        <div className="w-[80ch]" key={id}>
          <Link href={`/blog/${id}`}>
            <h2 className="text-[30px] font-bold">
              {id} - {title}
            </h2>
          </Link>
          <p>{body}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
