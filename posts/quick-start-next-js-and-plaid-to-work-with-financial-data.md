---
title: 'Quick Start: Next.js and Plaid to work with financial data'
date: 2020-03-14T04:00:00Z
subtitle: Your guide to getting started with Plaid in a Next.js app
socialimage: https://res.cloudinary.com/raskin-me/image/upload/v1584124448/nextjs-plaid-tailwind/nextjs-plaid-tailwind_mcw3fk.jpg

---
Now that I've got a lovely [Next.js personal website](https://raskin.me) up and running, I'm ready for my next project. I've always enjoyed grabbing CSV files from my credit card or bank accounts and playing around with the financial data. It allowed me to run super custom reports for properly managing personal finances. One method of doing this was using Jupyter Notebook and running some Matplotlib plots, which I explain on [this GitHub repo](https://github.com/perryraskin/TransFormer).

For a while now I've been meaning to integrate Plaid into a web app and try manipulating some financial data. After inevitably using it in the many budgeting apps I've encountered, I knew I had to give it a try myself. Currently I use [Copilot](https://copilot.money), an iOS budgeting app that uses Plaid, and I absolutely love it. Feel free to use my code MRJA4Q to get 3 months free!

I followed a [blog post](https://medium.com/@dereksams/building-a-react-app-with-the-plaid-api-93e45ae61b58) by Derek Sams that showed me how to get a React app running with Plaid. To get it working with Next.js, I had to make a few changes you may notice if you decide to compare the two.

## Our Starter App

What we're focusing on here is to simply get Plaid working with a working React app. It will make a call to Plaid's transactions API and display transactions to the console. Of course once you get this done you can build upon this thing to make it do some really useful stuff! 

## Get Set Up

If you'd like, you can get started from scratch using [Next.js's guide](https://nextjs.org/learn/basics/getting-started/setup) on starting a new project. For this post I'll focus on the [boilerplate repo](https://github.com/perryraskin/nextjs-plaid-starter) I published to GitHub. Once you clone the repo you'll want to run `npm install` in the root folder to get all set up. Please see the ReadMe file for more information.

## The Code

Normally Next.js doesn't require a `server.js` file, as the server is something that is build into the framework, and is kind of automatic. Since we need more control here, this file is important for working with Plaid's API.

### The Server

Since Next.js automatically runs the server, we need to work with what it already provides us with.

    const dotenv = require('dotenv').config();
    const next = require('next');
    const express = require("express");
    
    const port = parseInt(process.env.PORT, 10) || 3001;
    const dev = process.env.NODE_ENV !== 'production';
    const app = next({ dev });
    const handle = app.getRequestHandler();

You may notice that `app` isn't defined as `express()` like it is in a standard `server.js` file. Here, we're going to have Next.js start the server, and then we'll call `express` when we need our Plaid API routes.

    app.prepare().then(() => {
      const {
        receivePublicToken,
        getTransactions
      } = require("./controllers/controller");
    
      const server = express();
    
      server.use(express.json());
    
      server.use('/', express.static('../public'));
    
      // Get the public token and exchange it for an access token
      server.post("/auth/public_token", receivePublicToken);
    
      // Get Transactions
      server.get("/transactions", getTransactions);
    
      server.all('*', (req, res) => {
        return handle(req, res);
      });
    
      server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on ${port}`);
      });
    });

### The Front End Component

I recently learned that if we want to work with state when using Next.js, we need to call `useState()`. For our little project, we'll need `transactions` to be stateful.

    const [transactions, setTransactions] = useState(Object);

That's it! We're basically just declaring a variable along with a matching setter for its state. In this case, `transactions` is the variable and `setTransactions` is the setter function. If you are familiar with deconstructing, you cant think about it as deconstructing the imported `useState` functionality.

    function handleClick(res: any) {
       axios.get("/transactions").then(res => {
         setTransactions({ transactions: res.data });
       });
     }

This is the function that handles the click of our “Get Transactions” button to grab transactions. You'll see in the `PLink` component how it all comes together. This basically just makes an API call to grab the transactions from the account you just logged into through Plaid! Once we have the transactions, our `setTransactions` setter function sets the state to the value we just received.

## Conclusion

Once all of this is done, you'll see the object of transactions in the node console (_not_ the Chrome console). It's amazing that we have access to such a great API like Plaid. It really allows us devs to get creative with all kinds of data.

Feel free to leave comments and let me know how this went for you! I'd love to hear about any cool features you implemented following this initial setup.