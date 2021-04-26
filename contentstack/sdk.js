const contentstack = require("contentstack");

const Stack = process.env.API_KEY && process.env.DELIVERY_TOKEN && process.env.ENVIRONMENT
  ? contentstack.Stack({
    api_key: process.env.API_KEY,
    delivery_token: process.env.DELIVERY_TOKEN,
    environment: process.env.ENVIRONMENT,
    region: process.env.REGION ? process.env.REGION : "us",
  }) : "";


export const getEntryWithRef = (ctUid, ref, locale) => {
  return new Promise((resolve, reject) => {
    Stack.ContentType(ctUid)
      .Query()
      .language(locale)
      .includeReference(ref)
      .includeOwner()
      .toJSON()
      .find()
      .then(
        (result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        },
      );
  });
};

export const getEntry = (ctUid, locale) => {
  return new Promise((resolve, reject) => {
    Stack.ContentType(ctUid)
      .Query()
      .language(locale)
      .toJSON()
      .find()
      .then(
        (result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        },
      );
  });
};

export const getFirstEntry = (ctUid, locale) => {
  return getEntry(ctUid, locale)
    .then(result => (result && result[0] && result[0][0] ? result[0][0] : undefined));
};

export const getSpecificEntry = (ctUid, entryUrl, locale) => {
  return new Promise((resolve, reject) => {
    const blogQuery = Stack.ContentType(ctUid)
      .Query()
      .language(locale)
      .toJSON();
    const data = blogQuery.where("url", `${entryUrl}`).find();
    data.then(
      (result) => {
        resolve(result[0]);
      },
      (error) => {
        reject(error);
      },
    );
  });
};

export const getSpecificEntryWihtRef = (ctUid, entryUrl, ref, locale) => {
  return new Promise((resolve, reject) => {
    const blogQuery = Stack.ContentType(ctUid)
      .Query()
      .language(locale)
      .includeReference(ref)
      .toJSON();
    const data = blogQuery.where("url", `${entryUrl}`).find();
    data.then(
      (result) => {
        resolve(result[0]);
      },
      (error) => {
        reject(error);
      },
    );
  });
};
