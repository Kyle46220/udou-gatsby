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

ok so i got the images to work and I've been doing some styling. The CSS styling is confusing whe putting it with react components.

there's are few things going on.

There's CSS modules. you make a separate filename.module.css and then import this into the component as a module then you use the css in the component as className={moduleName.cssClass}

There's also some inline, I think its CSS in JS, where everything is pass through in a style props inside the component tag.

Then there's the CSS styles that come in with the component library from RMWC

Then I'm also using styled components.

so which order is the cascade?

I think for things like a button, or a smaller component I want to use a styled component.

But for bigger things Like a whole Panel or page, I want to use a css module.

then for individual things in the component, you can use CSS in JS.

Later I wonder If I will have to trim down all the CSS I have imported that I don't actually need.

2/06/20

Tonight i got the card menu working. the issue was that the wrapping anchor element needed to be around the whole header and not just the button. The portal wasn't really relevant here as it turns out.
never mind actually just realised that now if you clock over the whole header it opens the menu. Duh.

Ok so an import thing i realised is that you can use all the mdc-whatever\_\_something classname systems to referc to all the objects. RMWC keeps all these standards.

8/06 -

my goal today is to figure out responive layout grid for the card components, and make a large feature card.

So with the css. you have some universal components in a universal file, then you have modules specific to components, and then in each instance of a component you have the syled component instance, and then for tiny little changes you can use the inline js attribute styling.

getting the hang of using the component library. ITs pretty easy really. Very quick to build pages roughly. Formatting everything well and doing the media queries will be a bit harder but so far so good.

I just had a thought about how I want to do a business plan. Like what are the steps to getting another developer building this app?

How far do I go on my won? I'm going to write this in another doc now.
