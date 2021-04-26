const buildFetchUrl = (type, val) => `${process.env.NEXT_PUBLIC_CDN_REST_API}/content_types/${type}/entries/${val}?environment=${process.env.NEXT_PUBLIC_ENVIRONMENT}&locale=en-us&include_fallback=true&include[]=ingredients`;

export const fetchEntry = async (type, id) => {
  const response = await fetch(buildFetchUrl(`${type}`, id), {
    credentials: 'omit',
    headers: {
      Accept: 'application/json, text/plain, */*',
      api_key: `${process.env.NEXT_PUBLIC_API_KEY}`,
      access_token: `${process.env.NEXT_PUBLIC_DELIVERY_TOKEN}`,
    },
    method: 'GET',
    mode: 'cors',
  });
  return response.json();
};

const buildSearchUrl = (type, query) => `${process.env.NEXT_PUBLIC_CDN_REST_API}/content_types/${type}/entries?environment=${process.env.NEXT_PUBLIC_ENVIRONMENT}&locale=en-us&query=${query}`;

export const searchEntry = async (type, query) => {
  const searchUrl = buildSearchUrl(type, query);
  const response = await fetch(searchUrl, {
    credentials: 'omit',
    headers: {
      Accept: 'application/json, text/plain, */*',
      api_key: `${process.env.NEXT_PUBLIC_API_KEY}`,
      access_token: `${process.env.NEXT_PUBLIC_DELIVERY_TOKEN}`,
    },
    method: 'GET',
    mode: 'cors',
  });
  const content = await response.json();
  return content.entries;
};
