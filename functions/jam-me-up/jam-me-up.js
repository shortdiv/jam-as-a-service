// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async () => {
  try {
    const data = [
      {
        name: "Jampanadas",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/bphoto/jlB3XA4XnnoU6omD9TSk5Q/o.jpg",
        rating: 4.0,
        coordinates: {
          latitude: 30.260291,
          longitude: -97.739127
        },
        price: "$$",
        location: {
          address1: "607 Davis Street,",
          address2: "",
          address3: "",
          city: "Austin",
          zip_code: "78701",
          country: "US",
          state: "TX",
          display_address: ["502 Brush Street", "Austin, TX 78702"]
        },
        phone: "",
        display_phone: ""
      },
      {
        name: "Jambalaya",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/bphoto/jlB3XA4XnnoU6omD9TSk5Q/o.jpg",
        rating: 4.0,
        coordinates: {
          latitude: 30.2646848,
          longitude: -97.7340204
        },
        price: "$$",
        location: {
          address1: "502 Brush Street,",
          address2: "",
          address3: "",
          city: "Austin",
          zip_code: "78702",
          country: "US",
          state: "TX",
          display_address: ["502 Brush Street", "Austin, TX 78702"]
        },
        phone: "",
        display_phone: ""
      },
      {
        name: "Jambon",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/bphoto/jlB3XA4XnnoU6omD9TSk5Q/o.jpg",
        rating: 4.0,
        coordinates: {
          latitude: 30.2580035,
          longitude: -97.739127
        },
        price: "$$",
        location: {
          address1: "1704 E Cesar Chavez St",
          address2: "",
          address3: "",
          city: "Austin",
          zip_code: "78702",
          country: "US",
          state: "TX",
          display_address: ["1704 E Cesar Chavez St", "Austin, TX 78702"]
        },
        phone: "",
        display_phone: ""
      },
      {
        name: "Jam and Toast",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/bphoto/jlB3XA4XnnoU6omD9TSk5Q/o.jpg",
        rating: 4.0,
        coordinates: {
          latitude: 30.268308,
          longitude: -97.693795
        },
        price: "$$",
        location: {
          address1: "1023 Springdale Rd 7A",
          address2: "",
          address3: "",
          city: "Austin",
          zip_code: "78721",
          country: "US",
          state: "TX",
          display_address: ["1023 Springdale Rd, 7A", "Austin, TX 78721"]
        },
        phone: "",
        display_phone: ""
      },
      {
        name: "Jamboree",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/bphoto/jlB3XA4XnnoU6omD9TSk5Q/o.jpg",
        rating: 4.0,
        coordinates: {
          latitude: 30.263274,
          longitude: -97.744468
        },
        price: "$$",
        location: {
          address1: "111 E Cesar Chavez St",
          address2: "",
          address3: "",
          city: "Austin",
          zip_code: "78701",
          country: "US",
          state: "TX",
          display_address: ["111 E Cesar Chavez St", "Austin, TX 78701"]
        },
        phone: "",
        display_phone: ""
      }
    ];

    return {
      statusCode: 200,
      body: JSON.stringify({ results: data })
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
