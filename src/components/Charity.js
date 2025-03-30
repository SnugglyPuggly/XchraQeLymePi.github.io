import "../styles/Charity.css";
import React, { useState } from "react";

function Charity() {
  const [charities, setCharities] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const findNearbyCharities = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log("User Location:", latitude, longitude); // Log the location
        await fetchCharities(latitude, longitude);
      },
      () => {
        setError("Unable to retrieve your location.");
        setLoading(false);
      }
    );
  };

  const fetchCharities = async (lat, lon) => {
    try {
      const apiKey = "pk.ac937ff91d4a9117841b269993662fb2";
      const query = "food bank washington";
      const radius = 100000;
      const endpoint = `https://eu1.locationiq.com/v1/search.php?key=${apiKey}&q=${query}&lat=${lat}&lon=${lon}&format=json&radius=${radius}&category=amenity`;

      console.log("Request URL:", endpoint);

      const response = await fetch(endpoint);
      const data = await response.json();

      console.log("API Response:", data);

      const filteredData = data.filter((charity) => charity.display_name.toLowerCase().includes("washington"));

      if (filteredData.length > 0) {
        setCharities(
          filteredData.slice(0, 3).map((charity) => ({
            name: charity.display_name,
            address: charity.address,
            link: `https://www.google.com/maps?q=${encodeURIComponent(charity.display_name)}`,
          }))
        );
      } else {
        setCharities([]);
        setError("No food banks or charity locations found nearby.");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching charities:", error);
      setError("Failed to find charities. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="charity-tab">
      <h2>Find a Food Bank or Charity for Donation</h2>
      <p>
        Donating extra food can help those in need while also reducing waste.
        Click the button below to find food banks or donation charities near you!
      </p>

      <button className="btn" onClick={findNearbyCharities} disabled={loading}>
        {loading ? "Finding Charities..." : "Find Nearby Food Banks"}
      </button>

      {error && <p className="error-message">{error}</p>}

      {charities.length > 0 && (
        <ul className="charity-list">
          {charities.map((charity, index) => (
            <li key={index}>
              <a href={charity.link} target="_blank" rel="noopener noreferrer">
                <strong>{charity.name}</strong>
                <br />
                {charity.address}
              </a>
            </li>
          ))}
        </ul>
      )}

      <div className="charity-image-container">
        <img
          src={require("../assets/images/foodcharity.jpg")}
          alt="Food Donation"
        />
      </div>
    </div>
  );
}

export default Charity;