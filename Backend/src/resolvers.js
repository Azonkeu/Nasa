module.exports = {
  Query: {
    getImages: (_, { input }, { dataSources }) => dataSources.nasaApi.getAllImages(input),   
  }
}
