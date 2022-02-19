import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '5o299v5c',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skSK7iD7Yq1yw16bdiuCZNjVW1FoMMWLubo9DwKCQq6pP6LJuiw2MDyriGcZATNZmWvUF3RSxPuJvc3XZEy5n1cXqwCIggUpgRay5NwFwyuuQCqhNqkcgxCteKlhfC6W0ZaPZJxFRYmkmLb36bAzm7Lr7bdc5mk6iKcp3PB1OGpCtfKXvAFl',
  useCdn: false,
})
