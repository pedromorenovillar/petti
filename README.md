# Groenemeyer presentation

Small SPA site used to present the singer Herbert Groenemeyer in a Basque language course.

## Project Structure

```
src/
│
├── abestia.js                    # Page with song and lyrics
├── bizitza.js                    # Page about his life
├── index.js                      # Main entry point
├── lana.js                       # Page about his work
├── musika.js                     # Page about his music
├── nor-da.js                     # Intro page
├── html/                         
│   └── template.html             # Main HTML layout
└── style/
    ├── styles.css                # Custom styling
    └── normalize.css             # CSS normalization
```

## Technologies Used

- HTML
- CSS
- Vanilla JavaScript

## Build Setup

This project uses **split Webpack configurations** following best practices from webpack-merge:

```
webpack.common.js   # Shared config (entry, output, loaders, plugins)
webpack.dev.js      # Development-only settings (devServer, source maps)
webpack.prod.js     # Production build settings
```

### Available Scripts

```
pnpm start      # Launches webpack-dev-server using webpack.dev.js
pnpm run build  # Creates a production build using webpack.prod.js
```

