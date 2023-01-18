import Image from "next/image";
import Layout from "../layout";

export default function primerBlog({ data }: { data: any }) {
  // console.log(data);
  return (
    <Layout>
      <h1>Blog numero {data.id}</h1>
      <h2 className="text-[30px] font-bold">
        {data.id} - {data.title}
      </h2>
      <p>{data.body}</p>
      {/* <Image
        src="/img/369-400x400.jpg"
        width={400}
        height={400}
        alt="image-static"
      ></Image>
      <Image
        src={`https://i.ibb.co/hcCXS8H/hd-wallpaper-g535f661a3-1920.jpg`}
        width={400}
        height={400}
        alt="image-online"
      ></Image>
      <Image
        src={`https://i.picsum.photos/id/369/400/400.jpg?hmac=T792nS1lCQzIwTFiLql9OR6BL_A_gBOncT8UV204NTM`}
        width={400}
        height={400}
        alt="image-online"
      ></Image>
      <Link href="/blog">Ir al blog</Link> */}
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const paths: [] = data.map(({ id }: { id: string }) => ({
      params: { id: `${id}` },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.log(err);
  }
}

export async function getStaticProps({ params }: { params: any }) {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + params.id
    );
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
