const LAT_LON_API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_API_KEY}&units=metric`;

const CITIES_GROUP_API_URL = `http://api.openweathermap.org/data/2.5/group?appid=${process.env.REACT_APP_API_KEY}&units=metric`;

export { LAT_LON_API_URL, CITIES_GROUP_API_URL };
