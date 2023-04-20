import Head from "next/head";

export const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      {/* Favicon: Football Icon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon_io/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon_io/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon_io/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon_io/site.webmanifest" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Tipping App",
  keywords:
    "Office sports tipping app, Workplace sports betting, Sports prediction app, Sports tipping competition, Office sports league, Sports betting among colleagues, Friendly sports betting, Sports odds and statistics, Sports betting app, Leaderboard for sports tipping",
  description:
    "An office sports tipping app is a mobile application designed to facilitate friendly sports betting among colleagues in the workplace.",
};
