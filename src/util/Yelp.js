// Client ID
// w5tIE6SLQwThhuOXL9eXoQ

const apiKey =
  "krSGtOieQbHcaagQMTjsSyRwWzFw-AuHw7NyR40w1n9nhakj-jxv88KxJQAEWJYUc0fdHiMk9F80Ng-ZMuxQyYQRlBA7i-xEo8U_n-W3_s6WgsKh8ucMCDrIHROTX3Yx";

const Yelp = {

const search = (term, location, sortBy) => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      if (jsonResponse.businesses) {
        jsonResponse.businesses.map((business) => {
          return {
            id: business.id,
            imageSrc: business.imageSrc,
            address: business.address,
            city: business.city,
            state: business.state,
            zipCode: business.zipCode,
            category: business.category,
            rating: business.rating,
            reviewCount: business.reviewCount,
          };
        });
      }
    });
}
};

export default Yelp;