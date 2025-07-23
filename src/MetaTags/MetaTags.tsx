import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

type Props = {
  page: string;
};

const MetaTags = ({ page }: Props) => {
  const [meta, setMeta] = useState<{
    title: string;
    description: string;
    keywords: string;
  } | null>(null);

  useEffect(() => {
    fetch("/metaData.json")
      .then((res) => res.json())
      .then((data) => {
        if (data[page]) {
          setMeta(data[page]);
        } else {
          console.warn(`No meta data found for page: ${page}`);
        }
      });
  }, [page]);

  if (!meta) return null;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
    </Helmet>
  );
};

export default MetaTags;
