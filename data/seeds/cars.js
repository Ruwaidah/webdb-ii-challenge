exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          model: "AMG GT63 S ",
          year: 2021,
          make: "BMW",
          VIN: "123awdq1231a",
          title: "clean",
          mileage: 50.1
        },
        {
          model: "GT 63 S",
          year: 2019,
          make: "mercedes ",
          VIN: "3awdq1231as12",
          title: "",
          mileage: 50.1
        },
        {
          model: "LX 570",
          year: 2020,
          make: "lexus",
          VIN: "123awdq31as12",
          title: "",
          mileage: 50.1
        }
      ]);
    });
};
