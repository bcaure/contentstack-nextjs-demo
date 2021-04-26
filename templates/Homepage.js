/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
import React from "react";
import { useRouter } from 'next/router';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { Layout } from "../components/layout";
import { SearchBar } from '../components/searchbar';
import { ListItem } from '../components/list-item';

export const Homepage = ({ page: homepage }) => {
  const page = homepage[0];

  const router = useRouter();

  const cocktailBanner = page.carousel.items.map(item => (
    <Carousel.Item key={item.cocktail_entry_id}>
      <div className="heroBanner bannerImage imageCover" style={{ backgroundImage: `url(${item.image.url})` }} />
      <Carousel.Caption>
        <Link href={`/blog/${item.cocktail_entry_id}`}>
          <Button variant="link" style={{ textDecoration: 'none' }}>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
          </Button>
        </Link>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  const bartenders = page.bartenders?.map(bartender => <ListItem key={bartender.title} item={bartender} />);

  return (
    <Layout>
      <div className="wrapper">
        <div>
          <div id="">
            <Carousel className="heroBanner">
              {cocktailBanner}
            </Carousel>
            <Container>
              <Row style={{ margin: '30px 0' }}>
                <SearchBar searchResultSelected={id => router.push(`/blog/${id}`)} />
              </Row>
              <Row><h2>Top Bartenders</h2></Row>
              <Row>{bartenders}</Row>
            </Container>
          </div>
        </div>
      </div>
    </Layout>
  );
};
