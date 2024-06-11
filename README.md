#Ecommerce Next.js App with TailwindCSS

```
   git clone https://github.com/fermonva/ecommerce-nextjs.git
   cd ecommerce-nextjs
```

## Install Dependencies
```
    npm install || pnpm install
```

## Run Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

- Next.js
- Tailwind CSS

## Project Structure

```bash
app
 ┣ blog
 ┃ ┣ page.tsx
 ┃ ┗ styles.module.css
 ┣ cart
 ┃ ┣ page.tsx
 ┃ ┗ styles.module.css
 ┣ nosotros
 ┃ ┣ page.tsx
 ┃ ┗ styles.module.css
 ┣ post
 ┃ ┗ [url]
 ┃ ┃ ┣ page.tsx
 ┃ ┃ ┗ styles.module.css
 ┣ product
 ┃ ┗ [url]
 ┃ ┃ ┣ page.tsx
 ┃ ┃ ┗ styles.module.css
 ┣ tienda
 ┃ ┣ page.tsx
 ┃ ┗ styles.module.css
 ┣ favicon.ico
 ┣ globals.css
 ┣ layout.tsx
 ┣ not-found.tsx
 ┣ page.tsx
 ┗ styles.module.css
 components
 ┣ card
 ┃ ┣ Card.tsx
 ┃ ┗ styles.module.css
 ┣ course
 ┃ ┣ CourseItem.tsx
 ┃ ┗ styles.module.css
 ┣ footer
 ┃ ┣ Footer.tsx
 ┃ ┗ styles.module.css
 ┣ header
 ┃ ┣ Header.tsx
 ┃ ┗ styles.module.css
 ┣ post
 ┃ ┣ Post.tsx
 ┃ ┗ styles.module.css
 ┣ shopping-cart
 ┃ ┣ ShoppingCart.tsx
 ┃ ┗ styles.module.css
 ┗ index.ts
 redux
 ┣ features
 ┃ ┗ cartSlice.ts
 ┣ middleware
 ┃ ┗ localstorage-middleware.ts
 ┣ hooks.ts
 ┣ provider.tsx
 ┗ store.ts
 types
 ┗ index.ts
 utils
 ┣ helpers.ts
 ┗ index.ts
 ```

 <image src="./public/img/guitar.jpeg" alt="Descripción de la imagen">