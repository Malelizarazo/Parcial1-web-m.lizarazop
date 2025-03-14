export function getMockUser() {
  return {
    name: "Camilo Escobar",
    profileImage: "https://img.freepik.com/foto-gratis/nadador-profesional_1268-24705.jpg",
    bestTimes: {
      running: "1:05",
      swimming: "1:05",
      cycling: "1:05",
    },
  };
}
export function getMockActivities() {
  const cities = ["Bogotá", "Medellín", "Cali", "Cartagena", "Barranquilla"];

  const generateActivity = (type, image) => ({
    type,
    image, // Use the specific images you provided
    length: `${Math.floor(Math.random() * 20) + 5} km`,
    duration: `${Math.floor(Math.random() * 90) + 20} min`,
    city: cities[Math.floor(Math.random() * cities.length)],
  });

  return {
    cycling: Array.from({ length: 10 }, () =>
      generateActivity(
        "Cycling",
        "https://th.bing.com/th/id/OIP.RaoE0SfVe2sIhl_1bnSyFQHaFj?rs=1&pid=ImgDetMain"
      )
    ),
    running: Array.from({ length: 10 }, () =>
      generateActivity(
        "Running",
        "https://th.bing.com/th/id/OIP.NnA6jIvlTZrMZedkm2JMngHaD4?rs=1&pid=ImgDetMain"
      )
    ),
    swimming: Array.from({ length: 10 }, () =>
      generateActivity(
        "Swimming",
        "https://th.bing.com/th/id/R.2564f65eb340a9f7801b455d2c8ebf99?rik=t9Ml2tuuHz8cNA&pid=ImgRaw&r=0"
      )
    ),
  };
}



