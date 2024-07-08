import { Post } from "@/components";
import type { Posts } from "@/types";
import { getPosts } from "@/utils";
import type { Metadata } from "next";

import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "GuitarLA - Tienda Virtual",
  description: "Blog de música, venta de guitarras, instrumentos",
};

export default async function Page(): Promise<JSX.Element> {
  const posts: Posts[] = await getPosts();
  return (
    <main className="contenedor">
      <h1 className="heading">Blog</h1>

      <div className={styles.grid}>
        {posts?.map((post: Posts) => (
          <Post key={post.id} attributes={post.attributes} id={post.id} />
        ))}
      </div>
    </main>
  );
}
