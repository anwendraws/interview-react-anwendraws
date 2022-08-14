## Node version

.nvmrc is used in the project.
Instal nvm and run in the project folder:

```
nvm use
```

You should set up script to call `nvm use` automatically in a directory with a .nvmrc file.

Please refer to this:
https://github.com/nvm-sh/nvm#nvmrc

## Scripts

```
npm run dev # dev mode
npm run build # build mode
npm run lint # lint
npm run start # start the server
```

## Interview Tasks

This test project is using react, next.js and chakra-ui. Please take a quick look at them if you are not familiar with them. Some part of the questions seems to be vague, which is intentional. You are expected to figure them out, however, feel free to ask any question you may have.

Please fork this repo and complete the following tasks.

1. Replace the "USER" with the real user ID.

2. Update the user/[id].js to show the right status info in the page.

3. Update the grid system using chakra ui; Feel free to design a layout that you think is great.

4. Add Chinese language support. Fix all warnings you run into.

5. [optional]Assuming we are buidling a blog system, where SEO is critical, add the SEO support for the project.

Step 1：Run the Project

      $ npm install
      $ npm run dev

Step 2: Open a browser and enter the URL "http://localhost:3000/user/[id]", 
        you can replace '[id]' with 'chenzhenchao' or any other name you like,
        Then Task 1 & 2 completed.

Step 3: You can see a page that already use chakra UI, 
        it's very simple and elegant.I will try other styles and make it more like a beautiful blog homepage.
        Then Task 3 completed and I will continue to the job done better.

Step 4: Just click the MenuButton "Language" and you can switch language from English to Chinese and opposite.
        Then Task 4 completed.

Step 5: I import Head from 'next/head' in the [id].js. 
        For the project is a part of blog system, I optimized keywords in Meta.
        Then Task 5 completed and I know what I done is not enough, I will study docs about Next.js SEO later.
