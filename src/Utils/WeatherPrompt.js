const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
export const WeatherPrompt = async (weather) => {
  if (!weather) {
    return "no weather data available";
  }
  try {
    const prompt = `Summarize the weather data: 
  Temperature: ${weather.Temperature}, 
  Condition: ${weather.Condition}, 
  Humidity: ${weather.Humidity}%, 
  Wind Speed: ${weather.WindSpeed} km/h.`;
    const response = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to get summary");
    }

    const data = await response.json();
    console.log(data);
    return (
      data.candidates?.[0]?.content?.parts?.[0]?.text || "No summary available."
    );
  } catch (error) {
    console.error("Error fetching summary:", error);
    return "Unable to generate summary.";
  }
};
