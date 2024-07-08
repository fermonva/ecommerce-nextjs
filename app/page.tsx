"use client";
import { Card, CourseItem, Post } from "@/components";

import type { Course, Posts, Product } from "@/types";
import { getCurse, getPosts, getProducts } from "@/utils";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function Home(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [posts, setPosts] = useState<Posts[]>([]);
  const [course, setCourse] = useState<Course>();

  const isValidCourseId =
    course?.id !== null && course?.id !== undefined && course?.id !== 0;

  const fetchData = async (): Promise<any> => {
    const [products, posts, course] = await Promise.all([
      getProducts(),
      getPosts(),
      getCurse(),
    ]);
    setProducts(products);
    setPosts(posts);
    setCourse(course);
  };

  useEffect(() => {
    fetchData().catch((error) => {
      console.log("Error fetching data", error);
    });
  }, []);

  return (
    <>
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <div className={styles.grid}>
          {Array.isArray(products) &&
            products?.map((product: Product) => (
              <Card
                key={product.id}
                attributes={product.attributes}
                id={product.id}
              />
            ))}
        </div>
      </main>
      {isValidCourseId && (
        <CourseItem
          key={course.id}
          attributes={course.attributes}
          id={course.id}
        />
      )}
      <section className="contenedor">
        <h2 className="heading">Blog</h2>

        <div className={styles.grid}>
          {Array.isArray(posts) &&
            posts?.map((post: Posts) => (
              <Post key={post.id} attributes={post.attributes} id={post.id} />
            ))}
        </div>
      </section>
    </>
  );
}
