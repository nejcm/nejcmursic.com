import {graphql, Link, useStaticQuery} from 'gatsby';
import {get, kebabCase} from 'lodash';
import * as React from 'react';
import Tag, {TagList} from '../Tag';

export const categoriesQuery = graphql`
  query {
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___category) {
        fieldValue
      }
    }
  }
`;

export interface Category {
  fieldValue: string;
}

const BlogCategories: React.SFC = () => {
  const data = useStaticQuery(categoriesQuery);

  return (
    <>
      <h3 className="secondary">TOP CATEGORIES</h3>
      <div>
        <TagList>
          {get(data, 'allMarkdownRemark.group', []).map(
            (category: Category) => (
              <Link
                to={`/blog/category/${kebabCase(category.fieldValue)}`}
                key={category.fieldValue}
              >
                <Tag>{category.fieldValue}</Tag>
              </Link>
            ),
          )}
        </TagList>
      </div>
    </>
  );
};

export default BlogCategories;
