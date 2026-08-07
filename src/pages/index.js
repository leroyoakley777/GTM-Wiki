import React from 'react';
import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

// The wiki has no marketing homepage yet — the content IS the product.
// Send visitors straight to the docs.
export default function Home() {
  return <Redirect to={useBaseUrl('/docs/intro')} />;
}
