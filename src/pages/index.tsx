import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import get from "lodash/get";
import { Image, Header } from "semantic-ui-react";
import ProductList from "../components/ProductList";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import HomePage from "../components/Content/HomePage";

const StoreIndex = ({ location }) => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMoltinProduct {
        edges {
          node {
            id
            name
            description
            mainImageHref
            meta {
              display_price {
                with_tax {
                  amount
                  currency
                  formatted
                }
              }
            }
            mainImage {
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  `);

  const siteTitle = get(data, "site.siteMetadata.title");
  const products = get(data, "allMoltinProduct.edges");
  const filterProductsWithoutImages = products.filter(
    v => v.node.mainImageHref
  );
  return (
    <Layout location={location}>
      <SEO title={siteTitle} />

      <Header
        as="h3"
        icon
        textAlign="center"
        style={{
          marginBottom: "2em"
        }}
      >
        <Header.Content
          style={{
            width: "60%",
            margin: "0 auto"
          }}
        ></Header.Content>
      </Header>

      <HomePage />

      {/* <ProductList products={filterProductsWithoutImages} /> */}
    </Layout>
  );
};

export default StoreIndex;
