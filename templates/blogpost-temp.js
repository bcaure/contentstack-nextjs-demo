/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ListItem } from '../components/list-item';

function dateSetter(params) {
  const date = new Date(params);
  const yy = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const mm = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const dd = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  return `${mm}-${dd}-${yy}`;
}

const CocktailIngredients = ({ ingredients }) => (
  <Container>
    <Row>
      {
        ingredients.map(bartender => <ListItem key={bartender.title} item={bartender} />)
      }
    </Row>
  </Container>
);

const CocktailDescription = ({ data }) => (
  <>
    <h2 className="quotezTitle"> Description</h2>
    <blockquote
      className="otroBlockquote"
      dangerouslySetInnerHTML={{ __html: data }}
    />
  </>
);

const CocktailSocialNetwork = ({ data }) => <div className="socialNetworl" dangerouslySetInnerHTML={{ __html: data.replace('\\', '') }} />;

export const BlogTemplate = ({ page }) => {
  const {
    image, title, updated_at: date, author, social_network: socialNetwork, ingredients, description,
  } = page.entry;

  console.log('description', description);

  return (
    <div className="blogListcontainer">
      <div className="heroBanner">
        <ul>
          <li>
            <img
              className="bannerImage"
              src={image.url}
              alt={image.filename}
              height="550px"
            />
            <div className="bannerContent">
              <h1>{title}</h1>
              <div>
                <span className="blogPostTimeStamp">
                  {dateSetter(date)}
                </span>
                ,
                <span className="blogpost-author">
                  {author}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="blogContent">
        <CocktailDescription data={description} />
        <h2>Ingredients</h2>
        <CocktailIngredients ingredients={ingredients.map(i => ({ ...i, href: i.image?.url }))} />
        <CocktailSocialNetwork data={socialNetwork} />
      </div>
    </div>
  );
};
