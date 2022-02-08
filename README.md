# Product Catalog

## Setup

Clone this repo, run `npm install` and `npm start` and it should be running on `http://localhost:3000/`.

## Task 1 - Product List Page

Populate the homepage with a list of product tiles by hitting `/products` endpoint. Product tiles should have name, image, and should be clickable into the product detail page.

<img width="1168" alt="Screen Shot 2022-02-08 at 11 01 37 AM" src="https://user-images.githubusercontent.com/42350359/153030802-90dc3c8b-04ea-45e1-a00e-6953c07e4005.png">

## Task 2 - Product Detail Page

Populate individual product pages by hitting `/products/[:id]`. Product pages should have a gallery of images, title, price information, description, and a list of all the option type and value combinations for that product (i.e. Option Types are things like Color, Pant Waist, ), and Add to Cart button.

<img width="1432" alt="Screen Shot 2022-02-08 at 11 02 05 AM" src="https://user-images.githubusercontent.com/42350359/153030945-71a20bad-2f3f-489f-a3e5-d0389a852119.png">
<img width="1331" alt="Screen Shot 2022-02-08 at 11 01 52 AM" src="https://user-images.githubusercontent.com/42350359/153030949-c67fa68c-cb91-46ed-b625-f05828d6d939.png">

## Task 3 - Cart (Nice to Have)

Make the Cart "functional" by opening it when Add to Cart is clicked. Populate the cart with data from the `/carts` endpoint and from the `/products/[:id]` endpoint.

<img width="1432" alt="Screen Shot 2022-02-08 at 11 02 05 AM" src="https://user-images.githubusercontent.com/42350359/153031949-99645de9-c015-47fd-9e04-0ae16fcb642e.png">
