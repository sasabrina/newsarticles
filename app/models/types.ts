export type Article = {
  _id: string;
  display_date: string;
  headlines: {
    basic: string;
  };
  promo_items: {
    basic: {
      resized_urls: Array<{
        option: {
          media: string;
        };
        resizedUrl: string;
      }>;
      subtitle: string;
      type: string;
      url: string;
    };
  };
  subtype: string;
  taxonomy: {
    tags: Array<{
      slug: string;
      text: string;
    }>;
  };
  website_url: string;
};

export type Tag = {
  slug: string;
  text: string;
  count?: number;
};
