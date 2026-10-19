# src/content/blog

This is the actual content directory written by the MEGA `github_markdown`
publisher. There is one Markdown file per article. Do not create a second,
disconnected `content/blog` directory.

## Publisher and loader contract

`BLOG_CONTENT_DIR` in `src/lib/blog.ts` is `src/content/blog`. It must remain
identical to the customer's `github_markdown_config.contentDir`. The blog index,
article routes, static params, and sitemap all use this one loader.

Publishing new content requires a production build, because the article route
uses `generateStaticParams` with `dynamicParams = false`. Unknown slugs return
404 instead of becoming on-demand pages.

## Frontmatter

| Key | Notes |
| --- | --- |
| `id` | Preserve the publisher's stable identity exactly. Never derive or remint it. |
| `title` | Required for the article to be served. |
| `slug` | Defaults to the Markdown filename without its extension. |
| `date` | Optional ISO calendar date or datetime; invalid dates do not emit machine-readable timestamps. |
| `description` | Optional; `excerpt` and `summary` are also recognized. |
| `image`, `imageAlt` | Optional; `heroImage` / `heroImageAlt` and `featuredImage` / `featuredImageAlt` are aliases. |
| `author` | Optional display byline. |
| `draft` | `true` or `"true"` excludes an article from the index, routes, and sitemap. |

The loader accepts native UUID identities and existing publisher `item_`
identities without converting either format. A reslug or edit must retain the
original `id`. Missing or malformed identities never cause an otherwise valid
published article to disappear, and the loader never creates an identity.

Only top-level scalar frontmatter is read. Other keys and nested structures are
ignored. Folded/block scalar values are not supported; write displayed values
on the key's own line.

## Body rendering and files

The shared starter parser supports Markdown, HTML, and mixed bodies. It converts
content to a restricted block/inline model, drops executable HTML, and checks
link and image URL schemes before rendering. Article HTML is not injected into
the page. Preserve these sanitization modules together when updating them.

Only readable `.md` and `.mdx` files are considered. `README.md`, dotfiles such
as `.gitkeep`, `_`-prefixed files, and directories are not articles. Images reuse
the URLs or local paths already supplied by the publisher; no media is invented
or copied by the loader.
