Finally got gatsby working, had to downgrade to an older version 2.19.21

Now I'm roughing in the components using RMWC

Today I'm doing Images with graphql its a bit confusing but I think I'll figuren it out pretty quick.

there was a good lesson in this medium article

https://medium.com/@kyle.robert.gill/ridiculously-easy-image-optimization-with-gatsby-js-59d48e15db6e

about putting images in there and about how to pass down graphql query response objects things through to the various components. At build time gatsby only checks for graphQl queries in certain places. I think layouts and pages folders in src. so any data you want in other components you have to pass through as props.

Learning graphql is gonna be the next step.
I've just been trying to write a graphql query. You can use the query builder at localhost:8000\_\_\_graphiql or whatever it is.

just looking at relative path. which is sort of what you would expect.

https://stackoverflow.com/questions/54551615/graphql-syntax-to-access-file-by-relativepath

I can't seem to get the actual returned data query to work. I'm wondering if its because I have a page within a page.

Next I'm going to try to either put the query in the parent page component (here its index) or maybe its the static query thing.
But for now. BEd!

ok so i got the images to work and I've been doing some styling
