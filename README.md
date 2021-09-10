# BooksRental Project

This is a MERN stack practice shopping cart project.

Here is the link to [my homepage](http://143.110.253.117/).

## Features

- All users could view the whole shop pages and view detail of specific book.
- Authenticated users could follow some books and take books into cart.
- Authenticated users could pay with credit card easily.
- In User page, authenticated users could read all the purchased (rented) books which are not expired.

## Description

![architecture diagram][architecture]

[architecture]: https://github.com/jackylearn/shopping/blob/master/architecture.png

### Backend

Authentication is implemented with [passport.js](http://www.passportjs.org/). The most common local strategy (username, password) is applied in this project. It will generate session and maintain via a cookie (through serialization and deserialization) in the browser if authentication succeeds.

Payment is implemented with [stripe.js](https://stripe.com/docs/js), which will generate a URL for server to redirect user to the payment page and redirect after payment succeeds or canceled.

For data storage, open-source [mongodb](https://docs.mongodb.com/manual/) is chosen and I use [mongoose](https://mongoosejs.com/docs/guide.html) to operate the database (build connection, make schema, query).

### Frontend

Frontend is built with [React](https://reactjs.org/), which provides convenient component-based structure to construct user interface.

[React-Redux](https://react-redux.js.org/) provides an organized way to manage my React state, preventing to suffer from scattered state.

To improve user experience, homepage data, cart items, authentication information are cached in the local storage.

### Deployment

The whole project is hosted on a droplet (virtual machine) of [Digitalocean](https://www.digitalocean.com/solutions/website-hosting/).

In order to deploy on the Linux OS, which is different from my Windows computer, I decide to setup my application in several docker images.
Both frontend and backend belong to each docker image, and mongodb could be pulled from Docker Hub.

Because I develop in a Windows 7 computer, which could only use deprecated [Docker-Toolbox](https://github.com/docker/toolbox) rather than [Docker-Desktop](https://www.docker.com/products/docker-desktop). Docker Toolbox build a docker machine with Oracle VM Virtual Box, which behaves differently from when the docker running directly on computer, especially in terms of network connection.

It takes me several days to realize that is why I could connect my containers in my computer properly, but fails on the Digitalocean droplet. Specifically, Oracle VM Virtual Box will generate private IP (usually 192.168.99.100) and we need to connect containers with it. However, in the digitalocean droplet, a bridge connection docker0 is created with IP 172.17.0.1 by Docker at installation time, and all the traffic to eth0 will be redirect through docker0 to communicate with containers. In addition, Docker has a built-in DNS, which allows us to connect containers within the same user-defined network by the service name defined in the docker-compose.yml. Even better!

[This article](https://bbs.huaweicloud.com/blogs/detail/223529) really helps me a lot to understand the network behinds Docker.
