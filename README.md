<a href="https://github.com/steven-tey/weathergpt">
   <img src="https://weathergpt.vercel.app/opengraph-image.png" alt="OG Image">
</a>

<h1 align="center">WeatherGPT</h3>

<p align="center">
   A ChatGPT Plugin starter template built with Next.js 13 App Router, Edge Functions, and Vercel
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#try-the-plugin"><strong>Try the Plugin</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="https://steventey.com/blog/chatgpt-plugin"><strong>Read the blog post</strong></a>
</p>
<br/>

## Introduction

WeatherGPT is a ChatGPT Plugin to get the weather of any given location.

https://user-images.githubusercontent.com/28986134/231841036-80da6d5b-b1dd-46e8-881e-4034529bcd1e.mp4

<br/>

It can also make appropriate recommendations of what outfits to wear given the weather.

![CleanShot 2023-04-13 at 13 16 45](https://user-images.githubusercontent.com/28986134/231851083-4a00ffd8-9372-42b4-a3c8-534b0435ee25.png)

## Features

- AI-Plugin & OpenAPI JSON specs
- Returns a link to a dynamic Next.js route
- Nextjs 13 App Router
- Edge Route Handlers for returning weather data
- Metadata API for SEO tags
- `ImageResponse` API for dynamic OG images at the edge

## Try the Plugin

If you have access to Plugins, you can try this plugin out!

1. Go to the Plugin Store
2. Click "Install an unverified plugin"
3. Enter "weathergpt.vercel.app"
4. Click "Install".

https://user-images.githubusercontent.com/28986134/231842599-ab80ccc2-b1c2-4d24-bdfc-c023eebdf320.mp4

## Deploy Your Own

You can deploy your own hosted version of this plugin to Vercel with one-click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-title=WeatherGPT+%E2%80%93%C2%A0ChatGPT+Plugin+Starter&demo-description=The+ultimate+ChatGPT+Plugin+starter+template.+WeatherGPT+is+a+ChatGPT+Plugin+to+get+the+weather+of+any+given+location.&demo-url=https%3A%2F%2Fweathergpt.vercel.app%2F&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F7Ft2fS9gtS9XtxUNVJJENP%2F04a68855bda0524982d3c15cbd2628ac%2FCleanShot_2023-04-13_at_12.37.09.png&project-name=WeatherGPT+%E2%80%93%C2%A0ChatGPT+Plugin+Starter&repository-name=weathergpt&repository-url=https%3A%2F%2Fgithub.com%2Fsteven-tey%2Fweathergpt&from=templates&skippable-integrations=1&env=WEATHER_API_KEY&envDescription=Get+your+WeatherAPI+key+here%3A&envLink=https%3A%2F%2Fwww.weatherapi.com%2F&teamCreateStatus=hidden)

Once you're done, don't forget to change all instances of `weathergpt.vercel.app` in the codebase to your app's URL:

![CleanShot 2023-04-14 at 17 23 32](https://user-images.githubusercontent.com/28986134/232164728-12a5d659-24a6-4528-babc-099dde5fdd26.png)

To add your newly deployed Plugin to ChatGPT, follow the steps from [Try the Plugin](#try-the-plugin) above, but instead of clicking on "Install an unverified plugin", select "Develop your own plugin" instead. Note that you'll need access to develop ChatGPT Plugins to be able to do this.

![CleanShot 2023-04-14 at 17 21 56](https://user-images.githubusercontent.com/28986134/232164948-d77c25c8-3ace-4b8c-8d30-db8d2b6283a5.png)

