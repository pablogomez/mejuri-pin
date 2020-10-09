# Developer NOTES:

Totally had fun performing the challenge, even though it took me almost 4 days to wrap it up having the real site as a guideline proved to be a good practice, i'm not a UI designer so regarding look & feel the page could be over simplistic or even clumsy, feedback is always welcome.

Things to consider, I didn't use Redux because I've considered as a part of the challenge only using plain React and hooks. So instead of using redux I've followed the path of implementing an extremely simple notification mechanism using the old and trusted observer pattern to dispatch events through the React component tree, you may find the implementation on "storage/index.ts".

Also, the app was written in **Typescript** so you will find some -simple- types all over the place to aid the code traversal and readability.

Sidenote here, some of the images from cloudfront were throwing 403.

I've tested the app using the Chrome Device tool to emulate Iphone and Moto G4 and making sure the site adapted the layout (i'm using a hook called react-responsive for the navigation bar)

Regarding performance:

- Some of the components were memoized to avoid useless re-rendering, images are using lazy-load and are scaled accordingly to the devices resolution.

- Queries against the JSON sources in S3 are cached with a default TTL.

- Dense images could use some compression besides Gzip, i would consider Brotly since in the past we had a good results changing compression algorithms for images. But it's out of the scope of the challenge.

... Running the app:

- Install the packages

```bash
npm install
```

- Execute

```bash
npm run start
```

Will open default port and you should have server running at localhost:3000

Thanks!

# Mejuri PIN

First of all, thanks for your time and take this challenge, we really appreciate it!
We gonna try to make this challenge and opportunity to see your skills and also interesting for you.

## The concept

You are a front-end rockstar and Mejuri contacted you to create the next product that will change the world: Mejuri PIN.
The main idea is to create a pinterest like board, showing all the Mejuri products, and also allow the user to like them.
The user should also be able to list only the liked products and filter the content by category.

Of Course this site should look awesome in mobile! Because everybody loves browsing with their phones!

Finally, the performance is important, and you are the expert! Please let us know about the strategies used in behalf of optimization and browser performance.

## Let’s do it

We included a candidate mockup.png as a base guide, but any improvement is well received!.
You can check the complete category page [here](https://mejuri.com/shop/t/type).

### All the products in a single endpoint

`http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/shop_all.json`

**Examples**

- Bracelets: `http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/bracelets.json`
- Necklaces: `http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/pendants.json`
- Earrings: `http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/earrings.json`
- Engagement: `http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/engagement.json`
- Pendants: `http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/pendants.json`
- Rings: `http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/rings.json`
- Staking sets: `http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/stacking-sets.json`

### Your app should be able to

- Read the data from the json sources.
- Render the products by category and show the name of the products when the user places the cursor over the product image.
- Save your favorite products and list them in a separate section.
- Filter by category.

## Libraries

- Please do not use other JS frameworks, such as JQuery, Angular, etc. Full development in React is mandatory for this challenge.
- We would love to see you implement [Styled Components](https://www.styled-components.com/).

**Objectives of this coding challenge**

- We would like to see how you organize and think your solution in React.
- We would like to see how you work with json data.
- We will check how the application feels in a cellphone or tablet.
- Most importantly, we would like you to have fun doing it!
