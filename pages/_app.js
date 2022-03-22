import { ThemeProvider } from "next-themes";
import "styles/app.scss";
import "styles/blog.scss";
import MainLayout from "layouts/main";
import WithoutSidebar from "layouts/withoutSidebar";
import { DefaultSeo } from "next-seo";
import Script from "next/script";
import { useRouter } from "next/router";
// import { usePanelbear } from "@panelbear/panelbear-nextjs";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isExperimentPage = router.pathname.startsWith("/experiments");
  const canonicalUrl = (
    `https://raskin.me` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  // usePanelbear("6qu0OcdJJF5");

  return (
    <ThemeProvider defaultTheme="system" attribute="class" enableSystem={true}>
      <DefaultSeo
        title="Hi, I'm Perry Raskin!"
        description="Full stack developer at Citi & at home."
        canonical={canonicalUrl}
        openGraph={{
          site_name: "Hi, I'm Perry Raskin!",
          title: "Hi, I'm Perry Raskin!",
          description: "Full stack developer at Citi & at home.",
          images: [
            {
              // url: "https://res.cloudinary.com/raskin-me/image/upload/v1647975577/raskin.me/images/FFE3A060-21CD-4BA9-9083-5477F7184C96_yrsvt5.jpg",
              url: "/images/site/meta.jpg",
              width: 800,
              height: 600,
              alt: "Perry Raskin",
            },
          ],
        }}
        twitter={{
          handle: "@perryraskin",
          site: "@perryraskin",
          cardType: "summary_large_image",
        }}
        additionalLinkTags={[
          {
            rel: "apple-touch-icon",
            href: "/touch-icons/apple-touch-icon",
          },
          {
            rel: "apple-touch-icon",
            href: "/touch-icons/apple-touch-icon",
            sizes: "60x60",
          },
          {
            rel: "apple-touch-icon",
            href: "/touch-icons/apple-touch-icon",
            sizes: "144x144",
          },
          {
            rel: "apple-touch-icon",
            href: "/touch-icons/apple-touch-icon",
            sizes: "60x60",
          },
          {
            rel: "apple-touch-icon",
            href: "/touch-icons/apple-touch-icon",
            sizes: "114x114",
          },
        ]}
      />
      {process.env.NODE_ENV == "production" ? (
        // Analytics Script
        <Script
          src="https://api.pirsch.io/pirsch.js"
          id="pirschjs"
          data-code="YFl95gWLgCz8hOBq25GEf4vpJLdcCJlx"
          strategy="afterInteractive"
        />
      ) : (
        ""
      )}
      {isExperimentPage ? (
        <WithoutSidebar>
          <Component {...pageProps} />
        </WithoutSidebar>
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </ThemeProvider>
  );
}

export default MyApp;
