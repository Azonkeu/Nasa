const { RESTDataSource } = require("apollo-datasource-rest")

class NasaImagesAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "https://images-api.nasa.gov/"
  }

  async getAllImages(input) {
    const response = await this.get(`search?q=${input}&media_type=image`);
      return response;
  }
}

module.exports = NasaImagesAPI
