import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";

const components = {
  pre:(props:any)=><div style={{whiteSpace:"pre",background:'#E9ECEF'}} {...props}></div>,
  a:(props:any)=><a style={{textDecoration: 'none',
    color: '#0269c8',
    borderBottom: '1px solid #d1e9ff'}} {...props}></a>
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
export default MyApp;
