import React from 'react';
import config from '../config/website';

interface Props {
  htmlAttributes: Object;
  headComponents: Array<any>;
  bodyAttributes: Object;
  preBodyComponents: Array<any>;
  body: string;
  postBodyComponents: Array<any>;
}

export default function HTML(props: Props) {
  return (
    <html lang="en" {...props.htmlAttributes}>
      <head>
        <title>{config.siteTitle}</title>
        <meta name="description" content={config.siteDescription} />
        <meta name="keywords" content={config.keywords.join(',')} />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <noscript>This site runs best with JavaScript enabled.</noscript>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{__html: props.body}}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
