[![Contentstack](https://camo.githubusercontent.com/d24f513afa94a4a762533d54a0f590300dbd0413/68747470733a2f2f7777772e636f6e74656e74737461636b2e636f6d2f646f63732f7374617469632f696d616765732f636f6e74656e74737461636b2e706e67)](https://www.contentstack.com/)


# Cocktail Site Project using ContentStack and Next.js

1. Get a trial from contentstack.com

2. Change region if not NA

```
csdx config:set:region EU 
```

3. Install the CLI and login 

```
csdx auth:login
```

4. Create a management token from your trial

5. Import the content 

```
csdx cm:import -A -s <stack_ApiKey> -l <master_language_code> -d <path_of_folder_where_content_is_stored>
```

6. Create a delivery token from your trial and configure the .local.env file from the .sample.env template



![banner](https://user-images.githubusercontent.com/41462986/105998117-51667580-60d2-11eb-80d8-155621ab6f52.png "banner.png")

## Live Demo

You can check the [live demo](https://sample-apps-nextjs-demo.now.sh/) to get first-hand experience of the website.


## Tutorial

We have created an in-depth tutorial on how you can create your application using Contentstack Javascript SDK. By following the steps given in the tutorial, you will be able to initialise and fetch entries from Contentstack though provided Javascript SDK.

[Build Website using Next.js and Contentstack](https://www.contentstack.com/docs/example-apps/build-a-website-using-next-js-and-contentstack)


## Documentation

Read Contentstack [docs](https://www.contentstack.com/docs/)

Learn about [Next.js](https://learnnextjs.com/)









