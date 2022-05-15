import lume from "https://deno.land/x/lume@v1.7.3/mod.ts";
import postcss from "https://deno.land/x/lume@v1.7.3/plugins/postcss.ts";
import parcelCss from "https://deno.land/x/lume@v1.7.3/plugins/parcel_css.ts";
import codeHighlight from "https://deno.land/x/lume@v1.7.3/plugins/code_highlight.ts";
import resolveUrls from "https://deno.land/x/lume@v1.7.3/plugins/resolve_urls.ts";
import esbuild from "https://deno.land/x/lume@v1.7.3/plugins/esbuild.ts";
import date from "https://deno.land/x/lume@v1.7.3/plugins/date.ts";
import basePath from "https://deno.land/x/lume@v1.7.3/plugins/base_path.ts";

const site = lume(
  {
    src: "./src",
    location: new URL("https://mr-infinity-bot.github.io/viewer/"), 
  },
);

site
  .ignore("README.md")
  .copy("static", ".")
  .loadAssets([".ts"])
  .use(basePath())
  .use(resolveUrls())
  .use(codeHighlight())
  .use(postcss())
  .use(parcelCss())
  .use(date())
  .use(esbuild({
    options: {
      bundle: true,
      keepNames: true,
      minify: false,
      minifyWhitespace: true,
      minifySyntax: true,
      platform: "browser",
    },
  }))
  .scopedUpdates(
    (path) => path.endsWith(".css"),
    (path) => path.endsWith(".png") || path.endsWith(".jpg"),
  );

export default site;
