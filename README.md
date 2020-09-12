## Foundation TS

A Typescript conversion of [Stackrole's Foundation][original], an awesome Gatsby starter. Visually and functionally the same, except it's Typescript.

A starter to launch your blazing fast personal website and a blog, Built with [Gatsby][gatsby] and [Netlify CMS][netlifycms]. [Click here to check out a live preview!][live-preview]

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/rbrcsk/gatsby-starter-ts-foundation)

[![Gatsby Starter Foundation Screenshot](static/assets/screenshot.png)][live-preview]

## 👌 Features

- A Blog and Personal website with Netlify CMS.
- Responsive Web Design
- Customize content of Homepage, About and Contact page.
- Add / Modify / Delete blog posts.
- Edit website settings, Add Google Analytics and make it your own all with in the CMS.
- SEO Optimized
- OpenGraph structured data
- Twitter Cards meta
- Beautiful XML Sitemaps
- Netlify Contact Form, Works right out of the box after deployment.
- Invite collaborators into Netlify CMS, without giving access to your Github account via Git Gateway
- Gatsby Incremental Builds with Netlify.

[For more info check out the original readme.][original]

## Issues

There are a few minor issues:

- [`gatsby-plugin-typegen`](https://github.com/cometkim/gatsby-plugin-typegen/issues/97) fails to generate some types when in develop mode
  the gatsby version is pinned to a working one
- [`gatsby-plugin-typegen`](https://github.com/cometkim/gatsby-plugin-typegen/issues/48) can't export the query from the gatsby config
  As a workaround a dummy component was added
- There's no IDE typehinting in the gatsby node file

[gatsby]: https://gatsbyjs.org
[netlifycms]: https://www.netlifycms.org
[live-preview]: https://gatsby-theme-foundation-ts.netlify.app
[original]: https://github.com/stackrole/gatsby-starter-foundation
