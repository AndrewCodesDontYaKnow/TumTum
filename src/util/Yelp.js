// Client ID
// w5tIE6SLQwThhuOXL9eXoQ
import queryString from 'query-string';

const apiKey =
  "krSGtOieQbHcaagQMTjsSyRwWzFw-AuHw7NyR40w1n9nhakj-jxv88KxJQAEWJYUc0fdHiMk9F80Ng-ZMuxQyYQRlBA7i-xEo8U_n-W3_s6WgsKh8ucMCDrIHROTX3Yx";

const Yelp = {
    


    // search(path, queryParams) {
    //     const query = queryString.stringify(queryParams);

    //     return fetch(`https://api.yelp.com/v3${path}?${query}`, {
    //         headers: {
    //             Authorization: `Bearer ${apiKey}`,
    //             Origin: 'localhost',
    //             withCredentials: true,
    //         }
    //     })
    // }


  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}
    `,

      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
      .then((response) => {
        return response.json();
      })
      .then(jsonResponse => {
          console.log(jsonResponse.businesses)
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imgSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            };
          });
        }
      });
  },
};

export default Yelp;
