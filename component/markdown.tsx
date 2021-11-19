const Markdown = (props: any) => {
  const {value} = props
  return (
      value
  )
};
<style jsx>{
    `:root {
        --side-bar-bg-color: #fafafa;
        --control-text-color: #777;
    }
    
    html {
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
    }
    
    body {
        color: rgb(51, 51, 51);
        line-height: 1.5;
    }
    
    #write {
        max-width: 860px;
          margin: 0 auto;
          padding: 30px;
        padding-bottom: 100px;
    }
    
    @media only screen and (min-width: 1400px) {
        #write {
            max-width: 1024px;
        }
    }
    
    @media only screen and (min-width: 1800px) {
        #write {
            max-width: 1200px;
        }
    }
    
    #write > ul:first-child,
    #write > ol:first-child{
        margin-top: 30px;
    }
    
    a {
        color: #4183C4;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        position: relative;
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-weight: bold;
        line-height: 1.4;
        cursor: text;
    }
    h1:hover a.anchor,
    h2:hover a.anchor,
    h3:hover a.anchor,
    h4:hover a.anchor,
    h5:hover a.anchor,
    h6:hover a.anchor {
        text-decoration: none;
    }
    h1 tt,
    h1 code {
        font-size: inherit;
    }
    h2 tt,
    h2 code {
        font-size: inherit;
    }
    h3 tt,
    h3 code {
        font-size: inherit;
    }
    h4 tt,
    h4 code {
        font-size: inherit;
    }
    h5 tt,
    h5 code {
        font-size: inherit;
    }
    h6 tt,
    h6 code {
        font-size: inherit;
    }
    h1 {
        font-size: 2.25em;
        line-height: 1.2;
        border-bottom: 1px solid #eee;
    }
    h2 {
        font-size: 1.75em;
        line-height: 1.225;
        border-bottom: 1px solid #eee;
    }
    
    h3 {
        font-size: 1.5em;
        line-height: 1.43;
    }
    h4 {
        font-size: 1.25em;
    }
    h5 {
        font-size: 1em;
    }
    h6 {
       font-size: 1em;
        color: #777;
    }
    p,
    blockquote,
    ul,
    ol,
    dl,
    table{
        margin: 0.8em 0;
    }
    li>ol,
    li>ul {
        margin: 0 0;
    }
    hr {
        height: 2px;
        padding: 0;
        margin: 16px 0;
        background-color: #e7e7e7;
        border: 0 none;
        overflow: hidden;
        box-sizing: content-box;
    }
    
    li p.first {
        display: inline-block;
    }
    ul,
    ol {
        padding-left: 30px;
    }
    ul:first-child,
    ol:first-child {
        margin-top: 0;
    }
    ul:last-child,
    ol:last-child {
        margin-bottom: 0;
    }
    blockquote {
        border-left: 4px solid #dfe2e5;
        padding: 0 15px;
        color: #777777;
    }
    blockquote blockquote {
        padding-right: 0;
    }
    table {
        padding: 0;
        word-break: initial;
    }
    table tr {
        border: 1px solid #dfe2e5;
        margin: 0;
        padding: 0;
    }
    table tr:nth-child(2n),
    thead {
        background-color: #f8f8f8;
    }
    table th {
        font-weight: bold;
        border: 1px solid #dfe2e5;
        border-bottom: 0;
        margin: 0;
        padding: 6px 13px;
    }
    table td {
        border: 1px solid #dfe2e5;
        margin: 0;
        padding: 6px 13px;
    }
    table th:first-child,
    table td:first-child {
        margin-top: 0;
    }
    table th:last-child,
    table td:last-child {
        margin-bottom: 0;
    }
    
    .CodeMirror-lines {
        padding-left: 4px;
    }
    
    .code-tooltip {
        box-shadow: 0 1px 1px 0 rgba(0,28,36,.3);
        border-top: 1px solid #eef2f2;
    }
    
    .md-fences,
    code,
    tt {
        border: 1px solid #e7eaed;
        background-color: #f8f8f8;
        border-radius: 3px;
        padding: 0;
        padding: 2px 4px 0px 4px;
        font-size: 0.9em;
    }
    
    code {
        background-color: #f3f4f4;
        padding: 0 2px 0 2px;
    }
    
    .md-fences {
        margin-bottom: 15px;
        margin-top: 15px;
        padding-top: 8px;
        padding-bottom: 6px;
    }
    
    
    .md-task-list-item > input {
      margin-left: -1.3em;
    }
    
    @media print {
        html {
            font-size: 13px;
        }
        table,
        pre {
            page-break-inside: avoid;
        }
        pre {
            word-wrap: break-word;
        }
    }
    
    .md-fences {
        background-color: #f8f8f8;
    }
    #write pre.md-meta-block {
        padding: 1rem;
        font-size: 85%;
        line-height: 1.45;
        background-color: #f7f7f7;
        border: 0;
        border-radius: 3px;
        color: #777777;
        margin-top: 0 !important;
    }
    
    .mathjax-block>.code-tooltip {
        bottom: .375rem;
    }
    
    .md-mathjax-midline {
        background: #fafafa;
    }
    
    #write>h3.md-focus:before{
        left: -1.5625rem;
        top: .375rem;
    }
    #write>h4.md-focus:before{
        left: -1.5625rem;
        top: .285714286rem;
    }
    #write>h5.md-focus:before{
        left: -1.5625rem;
        top: .285714286rem;
    }
    #write>h6.md-focus:before{
        left: -1.5625rem;
        top: .285714286rem;
    }
    .md-image>.md-meta {
        /*border: 1px solid #ddd;*/
        border-radius: 3px;
        padding: 2px 0px 0px 4px;
        font-size: 0.9em;
        color: inherit;
    }
    
    .md-tag {
        color: #a7a7a7;
        opacity: 1;
    }
    
    .md-toc { 
        margin-top:20px;
        padding-bottom:20px;
    }
    
    .sidebar-tabs {
        border-bottom: none;
    }
    
    #typora-quick-open {
        border: 1px solid #ddd;
        background-color: #f8f8f8;
    }
    
    #typora-quick-open-item {
        background-color: #FAFAFA;
        border-color: #FEFEFE #e5e5e5 #e5e5e5 #eee;
        border-style: solid;
        border-width: 1px;
    }
    
    /** focus mode */
    .on-focus-mode blockquote {
        border-left-color: rgba(85, 85, 85, 0.12);
    }
    
    header, .context-menu, .megamenu-content, footer{
        font-family: "Segoe UI", "Arial", sans-serif;
    }
    
    .file-node-content:hover .file-node-icon,
    .file-node-content:hover .file-node-open-state{
        visibility: visible;
    }
    
    .mac-seamless-mode #typora-sidebar {
        background-color: #fafafa;
        background-color: var(--side-bar-bg-color);
    }
    
    .md-lang {
        color: #b4654d;
    }
    
    /*.html-for-mac {
        --item-hover-bg-color: #E6F0FE;
    }*/
    
    #md-notification .btn {
        border: 0;
    }
    
    .dropdown-menu .divider {
        border-color: #e5e5e5;
        opacity: 0.4;
    }
    
    .ty-preferences .window-content {
        background-color: #fafafa;
    }
    
    .ty-preferences .nav-group-item.active {
        color: white;
        background: #999;
    }
    
    .menu-item-container a.menu-style-btn {
        background-color: #f5f8fa;
        background-image: linear-gradient( 180deg , hsla(0, 0%, 100%, 0.8), hsla(0, 0%, 100%, 0)); 
    }
    `
}</style>;
export default Markdown;
