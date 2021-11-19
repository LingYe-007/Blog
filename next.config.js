/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension:/\.mdx?$/,
  options:{
    remarkPlugins:[],
    rehypePlugins:[]
  }
})
module.exports = withMDX({
  pageExtensions:['mdx','tsx','ts','js','md']
});
