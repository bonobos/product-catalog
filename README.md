# Product Catalog

## Setup

Clone this repo, run `npm install` and `npm start` and it should be running on `http://localhost:3000/`.

API reference is here: [api_doc.md](https://github.com/bonobos/product-catalog/blob/main/api_doc.md)

We are using mock responses from My JSON Server:
- https://my-json-server.typicode.com/bonobos/fake-product/products
- https://my-json-server.typicode.com/bonobos/fake-product/products/[:id]
- https://my-json-server.typicode.com/bonobos/fake-product/carts

## Task 1 - Product List Page

Populate the homepage with a list of product tiles by hitting `/products` endpoint. Product tiles should have name, image, and should be clickable into the product detail page.

![Screen Shot 2023-02-22 at 5 49 01 PM](https://user-images.githubusercontent.com/42350359/220778289-f48f5a6b-a926-4050-ab4f-771c26ba21e5.png)

## Task 2 - Product Detail Page

Populate individual product pages by hitting `/products/[:id]`. Product pages should have a gallery of images, title, price information, description, and a list of all the option type and value combinations for that product (i.e. Option Types are things like Color, Pant Waist, ), and Add to Cart button.

![Screen Shot 2023-02-22 at 5 48 44 PM](https://user-images.githubusercontent.com/42350359/220778385-5f802298-d063-4504-a1de-282f2bab7e44.png)
![Screen Shot 2023-02-22 at 5 48 55 PM](https://user-images.githubusercontent.com/42350359/220778382-92755ee9-6154-417d-88a8-5d9dd19d376c.png)

## Task 3 - Cart (Nice to Have)

Make the Cart "functional" by opening it when Add to Cart is clicked. Populate the cart with data from the `/carts` endpoint and from the `/products/[:id]` endpoint.

<img width="1432" alt="Screen Shot 2022-02-08 at 11 02 05 AM" src="https://user-images.githubusercontent.com/42350359/153031949-99645de9-c015-47fd-9e04-0ae16fcb642e.png">
