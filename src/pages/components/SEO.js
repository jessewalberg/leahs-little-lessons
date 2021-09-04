import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ description, lang, meta, image: metaImage, title, pathname }) => {
  const { site } = useStaticQuery(siteQuery);

  const metaDescription = description || site.siteMetadata.description;

  const image = metaImage && metaImage.src
    ? `https:${metaImage.src}` : null;
  const canonical = pathname ? `${site.siteMetadata.siteUrl}/${pathname}` : null;
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
            {
              rel: "canonical",
              href: canonical
            },
          ]
          : []
      }
      meta={[
        {
          name: 'msvalidate.01',
          content: '9409432C3AE26A243D38D065FB249100'
        },
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords.join(","),
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(
        metaImage
        ? [
          {
            property: 'og:image',
            content: image,
          },
          {
            property: 'og:image:width',
            content: image.width,
          },
          {
            property: "og:image:height",
            content: image.height,
          },
          {
            name: "twitter:card",
            content: "summary_large_image",
          }

        ] : [
          {
            name: "twitter:card",
            content: "summary",
          }
        ]
      )
      .concat(meta)}
      />
  );
}


const siteQuery = graphql`
query {
  site {
    siteMetadata {
      title
      description
      author
      keywords
      siteUrl
    }
  }
}
`
SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: ''
}
export default SEO;