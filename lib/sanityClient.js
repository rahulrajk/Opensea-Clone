import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'exg3rl2e',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skVeOMfTtzHtbTjQKMbVJiqrsL0zCyEO498tE4ISnUh9khAQMKzvrZmJTs5aFpyQ8pQoJaV3sLecEumj2PYzanJaaPUET0iaSYy0rAU112P14mKou7uBUfCjMW2aMjdMGZhm6JgvrfJuAk93bZVI2woYlfxavQJSJ83j4Ta2NNfFgPdk3Gyl',
    useCdn: false,
})