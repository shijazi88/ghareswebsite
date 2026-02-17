export const getEcoAdvice = async (userQuery: string): Promise<string> => {
  try {
    const response = await fetch("/api/eco-advice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: userQuery }),
    });

    const data = await response.json();
    return data.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Eco-advice API Error:", error);
    return "Our eco-systems are currently busy. Please try again later.";
  }
};
