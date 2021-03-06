import React from 'react'
import { Link } from 'react-router-dom';

import * as routes from 'routes'
// Individual import to prevent importing what we don't need
import Columns from 'bloomer/lib/grid/Columns';
import Column from 'bloomer/lib/grid/Column';
import Button from 'bloomer/lib/elements/Button';
import Section from 'bloomer/lib/layout/Section';
import Title from 'bloomer/lib/elements/Title';

const PostItem = (props) => {
  let {post} = props;
  return (
    <li>
<Section>
      <Columns isCentered isMobile>
        <Column isSize="2/3">
          <Title>{post.title}</Title>
          <hr />
          <p>{post.intro}...</p>
          <Column >
            <Link to={`${routes.BLOG}/${post.slug}`}>
              <Button>Read More</Button>
            </Link>
          </Column>
        </Column>
      </Columns>
</Section>
    </li>
  )
}

export default PostItem;