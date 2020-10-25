// Client ID
// w5tIE6SLQwThhuOXL9eXoQ

const apiKey =
  "krSGtOieQbHcaagQMTjsSyRwWzFw-AuHw7NyR40w1n9nhakj-jxv88KxJQAEWJYUc0fdHiMk9F80Ng-ZMuxQyYQRlBA7i-xEo8U_n-W3_s6WgsKh8ucMCDrIHROTX3Yx";

const Yelp = {
  search(term, location, sortBy) {
    console.log(`term is: ${term}`);
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}
    `,

      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          // "X-Requested-With": "XMLHttpRequest",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => {

// `const testName = response.jsonBody.businesses[0].name`

        console.log(`hi`);
        console.log(response);
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
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
      })
      .then((beforeObjecIsSent) => {
        console.log("beforeObjecIsSent ", beforeObjecIsSent);
      });
  },
};

export default Yelp;
