/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable no-throw-literal */
/* eslint-disable import/extensions */
import React from 'react';
import { getFirstEntry } from '../../contentstack/sdk.js';
import { fetchEntry } from '../../contentstack/api.js';
import { Layout } from '../../components/layout';
import { BlogTemplate } from '../../templates/blogpost-temp.js';


class BlogPosts extends React.Component {
  static async getInitialProps({ query }) {
    const postLink = query.post;
    try {
      const result = await fetchEntry('cocktail', postLink);
      const header = await getFirstEntry('cocktail_header_section', 'en-us');
      const footer = await getFirstEntry('cocktail_footer_section', 'en-us');
      return {
        data: {
          result,
          header,
          footer,
        },
      };
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <Layout
        header={this.props.data.header}
        footer={this.props.data.footer}
      >
        <BlogTemplate page={this.props.data.result} />
      </Layout>
    );
  }
}
export default BlogPosts;
