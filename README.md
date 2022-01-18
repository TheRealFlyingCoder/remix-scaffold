![](/assets/header.png)

# Remix Scaffold
>🚧 *This package is still in development and non-functional, reach out if you'd like to help make it reality.* 🚧  

Remix scaffold, is a code-gen tool for [Remix](https://remix.run/) designed to increase your productivity, and manage your route heirarchy.

To do this, we provide a `routes.yml` file at the root of your app, which allows you to define the structure and behaviour of your site (Or utilise pre-built structures from the community) from which your routes and views are automatically generated.

## Getting Started

```bash
#Install globally
npm install -g remix-scaffold

#initialise
remix-scaffold init

#Or simply use npx without installing
npx remix-scaffold init
```

This will initialise a `routes.yml` file at the root of your project:

```yml
structure: co-locate
routes:
  - name: Home
    type: index
  - name: Login
  - name: Jokes
    children:
      - name: New
      - name: Joke
        slug: jokeId

```
>*Note: The default structure is based off the [remix jokes](https://remix.run/docs/en/v1/tutorials/jokes) tutorial, check it out if you are new to Remix*

This is where you lay out the structure of your site, but for now simply run the following to generate your routes

```bash
remix-scaffold generate
```

Take a look in your `/app/routes` folder and you should see some new routes

![](/assets/generate.png)

And it's really as simple as that!

## Full structure for `routes.yml`

```yml
structure: split | co-locate #Default - co-locate
templates: /pathToTemplates #TODO - Define your own templates
routes:
  - name: Home #Becomes the route name in lowercase
    type: basic | index | layout | pathless #Default - basic
  - name: Blog
    type: layout
    children:
      - name: Post
        slug: postId #Defines a dynamic route $postId.tsx
  - name: BlogAuthors
    route: blog.authors #This will generate Dot Delimeter route
  - name: CatchAll
    slug: . #This will generate a $.tsx Splat route
```

### Route references
- [Dynamic routes](https://remix.run/docs/en/v1/api/conventions#dynamic-route-parameters)
- [Layout routes](https://remix.run/docs/en/v1/api/conventions#layout-routes)
- [Pathless layout routes](https://remix.run/docs/en/v1/api/conventions#pathless-layout-routes)
- [Dot Delimeters](https://remix.run/docs/en/v1/api/conventions#dot-delimeters)
- [Splat routes](https://remix.run/docs/en/v1/api/conventions#splat-routes)

## CLI Options (Planned)

### `remix-scaffold init`
- `--template` - Use a predefined `routes.yml` template from the community (TODO)

### `remix-scaffold generate`
- `--clear` - Clears folders and routes that no longer exist in the `routes.yml` (TODO)
- `--reset` - Override existing routes, and clears non-existent routes (TODO)