exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: '2G4GU5EV6C9440783',
          make: 'Mitsubishi',
          model: 'Lancer Evolution',
          mileage: '5467.23',
          transmission_type: 'automatic',
          status_of_title: 'clean'
        },
        {
          VIN: 'WBALW7C54DD619062',
          make: 'Hyundai',
          model: 'Accent',
          mileage: '12983.65',
          transmission_type: 'automatic',
          status_of_title: 'null'
        },
        {
          VIN: 'WAUAF78E25A634520',
          make: 'Dodge',
          model: 'Grand Caravan',
          mileage: '40756.38',
          transmission_type: 'manual',
          status_of_title: 'salvage'
        },
        {
          VIN: 'WBAPK7C53BF321200',
          make: 'Land Rover',
          model: 'Discovery',
          mileage: '8650.32',
          transmission_type: 'automatic',
          status_of_title: 'null'
        },
        {
          VIN: "1GD120EGXBF659431",
          make: "Dodge",
          model: "Dakota Club",
          mileage: '23945.56',
          transmission_type: 'manual',
          status_of_title: 'null'
        }
      ]);
    });
};

