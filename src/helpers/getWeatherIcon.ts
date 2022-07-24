// Purpose of the function is to get the icon code replacement from API response
// Why? Because API icons are bad and ugly, and we have better ones.
// But we only have two icons for day and night and those are CLEAR SKY/FEW CLOUDS with code 01d 01n 02d 02n
// So we don't care night or day for other icons only the two we mentioned
const getWeatherIcon = (icon: string): string => {
  let iconCode = icon;
  // Get the code number. ex: 01d => 01 or 11n => 11
  const iconNumber = icon.substring(0, 2);

  // Check if code isn't clear sky or few clouds and attach the icon code to a number, ignoring d/n
  if (iconNumber !== '01' && iconNumber !== '02') iconCode = iconNumber;

  // If the icon is clear sky or few clouds return the default with d/n
  return `/assets/weather-icons/${iconCode}.png`;
};

export default getWeatherIcon;
