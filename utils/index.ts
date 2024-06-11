import {
  type CategoryData,
  type Course,
  type Posts,
  type Product,
} from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

const PRODUCTS_URL = `${API_URL}/products?populate=*`;
const POSTS_URL = `${API_URL}/posts?populate=*`;
const CURSE_URL = `${API_URL}/course?populate=*`;

const PRODUCTS_URL_IMG = `${API_URL}/products?populate=img`;
const POSTS_URL_IMG = `${API_URL}/posts?populate=img`;
const CURSE_URL_IMG = `${API_URL}/course?populate=img`;

const getProductUrl = (url: string): string =>
  `${API_URL}/products?populate=*&filters[url]=${url}`;

const getPostUrl = (url: string): string =>
  `${API_URL}/posts?populate=*&filters[url]=${url}`;

const fetchData = async (url: string): Promise<any> => {
  try {
    const response = await fetch(url, {
      mode: "cors",
      cache: "no-store",
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        // body: JSON.stringify({
        //   data: {
        //     populate: "*",
        //   },
        // }),
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching data from ${url}`);
    }

    return await response.json();
  } catch (error: Error | any) {
    throw new Error(`Error in fetchData: ${error.message}`);
  }
};

export const getProducts = async (): Promise<Product[]> => {
  try {
    const data = await fetchData(PRODUCTS_URL);
    const result: Product[] = data.data;
    return result;
  } catch (error: Error | any) {
    throw new Error(`Error in getProducts: ${error.message}`);
  }
};

export const getProduct = async (url: string): Promise<Product> => {
  try {
    const data = await fetchData(getProductUrl(url));
    const result: Product = data.data;
    return result;
  } catch (error: Error | any) {
    throw new Error(`Error in getProduct: ${error.message}`);
  }
};

export const getPosts = async (): Promise<Posts[]> => {
  try {
    const data = await fetchData(POSTS_URL);
    const result: Posts[] = data.data;
    return result;
  } catch (error: Error | any) {
    throw new Error(`Error in getPosts: ${error.message}`);
  }
};

export const getPost = async (url: string): Promise<Posts> => {
  try {
    const data = await fetchData(getPostUrl(url));
    const result: Posts = data.data;
    return result;
  } catch (error: Error | any) {
    throw new Error(`Error in getPost: ${error.message}`);
  }
};

export const getCurse = async (): Promise<Course> => {
  try {
    const data = await fetchData(CURSE_URL);
    const result: Course = data.data;
    return result;
  } catch (error: Error | any) {
    throw new Error(`Error in getPosts: ${error.message}`);
  }
};

export const getAllCategories = async (): Promise<CategoryData> => {
  try {
    const [products, posts, course] = await Promise.all([
      fetchData(PRODUCTS_URL_IMG),
      fetchData(POSTS_URL_IMG),
      fetchData(CURSE_URL_IMG),
    ]);

    const resultProducts: Product[] = products.data;
    const resultPosts: Posts[] = posts.data;
    const resultCurse: Course = course.data;

    return {
      products: resultProducts,
      posts: resultPosts,
      course: resultCurse,
    };
  } catch (error: Error | any) {
    throw new Error(`Error in getAllCategories: ${error.message}`);
  }
};
