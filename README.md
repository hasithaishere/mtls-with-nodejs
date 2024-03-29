# A Deep Dive into Mutual TLS (mTLS) with NodeJS

This project contains source code and supporting files for a server and client application that demonstrate mutual TLS (mTLS) authentication between a client and a server. The server and client is written in NodeJS.

This is a companion project to the blog post [Securing Node.js Communication: A Deep Dive into Mutual TLS (mTLS)](https://blog.hasitha.xyz/securing-nodejs-communication-a-deep-dive-into-mutual-tls-mtls).

## Getting Started

To get started, clone this repository and install the dependencies.

```bash
git clone git@github.com:hasithaishere/mtls-with-nodejs.git
cd nodejs-mtls
npm install
```

## Running the Server

To run the server, run the following command:

```bash
npm run server
```

## Running the Client

To run the client, run the following command:

```bash
npm run client
```

----

For the sample code to run correctly, please add the test domain names to your `/etc/hosts` file. This will prevent connection errors.

<p align='center'> <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706291269586/25b2b7f3-8781-438d-b929-c381e7279541.gif"/></p>

### Related Videos

- [Exploring  Mutual TLS (mTLS) : How to Create Certificate Authority(CA) Certificate using OpenSSL](https://youtu.be/Wueq9fjjyE0)
- [Exploring  Mutual TLS (mTLS) : Generate Server Certificates](https://youtu.be/l6KSu9phQVo)
- [Exploring  Mutual TLS (mTLS) : Generate Client Certificates](https://youtu.be/hgMZ7RyMP68)


If you have any questions, please feel free to reach out to me in the comments section of the blog post or on my site [hasitha.xyz](https://hasitha.xyz).
