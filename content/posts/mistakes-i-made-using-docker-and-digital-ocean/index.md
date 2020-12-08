---
title: Mistakes I Made Using Docker and Digital Ocean
author: Sidhant Mathur
date: 2020-12-08
hero: images/docker_desktop_enterprise.jpg
---
So, I fancy myself as a person adept with code. Using this gross overestimation of my abilities I decided that Docker can't scare me, and I would setup my own server to host my Ghost blog.

> If you're familiar with Docker, avert your gaze.

Now Docker is pretty far outside my comfort-zone, I'm more of a web development kind of guy, and every explanation of kubernetes, containers and the like made no sense to me. But of course, how hard could it be? As long as you follow the documentation and instructions, you could get what you needed done right?

Well eventually yes, but lacking the high level conceptual understanding of what was going on made relatively simple tasks take a very long time. Here are a few things to avoid:

### Pay Attention to Folder Structure

Embarrassingly simple I know, but when you unzip "app" into a folder called "app" and have to run commands inside "app", it can get confusing. When the Docker tutorial commands aren't working, make sure you're in the right folder.

### Docker Login Commands

For some reason, Docker login doesn't always work as it's supposed to.

Instead of:

Try:

### Make Sure You Need Docker

Another embarrassing one to be sure. Just because Ghost has it on their documents page, doesn't mean it's the best option.

![](https://sidhantm.com/content/images/2020/08/ghostsnap.png)

Sure if you actually have a plan to manage the server you can use that, but for 99% of beginners they'd be better off just getting a "droplet" from Digital Ocean.

Droplets involve a bit less setup, and are equally powerful for most people.

### Set Up A Domain Before SSH

Trust me this saves a bunch of work. Make sure that you bought a domain from a reputable seller before you start working on anything with Docker or Digital Ocean.

### Setting Up Mail Servers

Now you've gone through all the steps of getting your Ghost newsletter ready. Mailgun API, everything is figured out. It's looking great, and you start collecting memberships. There's a problem however; all your login emails go to spam. What's the reason for this? Here's a good few things to read:

Hopefully I've saved someone a bit of time, as I wish I had this kind of information when I started!