<h1 id="writingdocs">Writing Docs</h1>

<h4 style="color: gray;">How to contribute by writing documentation?</h4>

If you think some information is missing from the docs, you can **modify** or **add** documentation.

<h3 id="howtomodifyadocpage">How to modify a doc page?</h3>

Each doc page is stored in the _/public/docs_ folder and consists of two files: one file for the content of the page in markdown format and another file that is an array of sections for that page.

1. Change content in _content.md_.
2. Add a new page section in _sections.ts_ (optional).

<h3 id="howtoaddadocpage">How to add a doc page?</h3>

You will need to inform NextJS about the new page.

1. All the page slugs are listed in the _\[slug\].tsx_. For example, this file contains an array of page names for the "Getting Started" doc. _You need to add the page name to this array._
2. We use a reusable array to inform the code (logic) about the pages available in the docs. _You need to add the page name to this array._
3. Add a folder under _public/docs/[contribution or components or nothing]_ with a file named
   _content.md_ and another named _sections.ts_
4. Write the content in content.md in markdown format.
5. List the sections of the new page in sections.ts in an array.
