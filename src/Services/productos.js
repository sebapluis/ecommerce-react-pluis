const autos = [{
    "id": 1,
    "marca": "Maserati",
    "modelo": "Spyder",
    "año": 1991,
    "chasis": "1G6AM5SX9D0111218"
  }, {
    "id": 2,
    "marca": "Cadillac",
    "modelo": "Eldorado",
    "año": 1995,
    "chasis": "3VW8S7AT4FM012735"
  }, {
    "id": 3,
    "marca": "Ford",
    "modelo": "E-Series",
    "año": 2011,
    "chasis": "KMHHT6KD3DU303927"
  }, {
    "id": 4,
    "marca": "Plymouth",
    "modelo": "Grand Voyager",
    "año": 1994,
    "chasis": "WAUHFAFL5EN455233"
  }, {
    "id": 5,
    "marca": "Chevrolet",
    "modelo": "Silverado",
    "año": 2002,
    "chasis": "WVGEF9BP0FD814522"
  }, {
    "id": 6,
    "marca": "Chevrolet",
    "modelo": "Camaro",
    "año": 1992,
    "chasis": "WA1AY74LX9D242255"
  }, {
    "id": 7,
    "marca": "Pontiac",
    "modelo": "Firefly",
    "año": 1991,
    "chasis": "KM8NU4CC0BU900766"
  }, {
    "id": 8,
    "marca": "Mazda",
    "modelo": "B-Series Plus",
    "año": 2002,
    "chasis": "WAUYP54B71N067395"
  }, {
    "id": 9,
    "marca": "Nissan",
    "modelo": "Altima",
    "año": 2003,
    "chasis": "5GAKVAED3BJ947835"
  }, {
    "id": 10,
    "marca": "Chevrolet",
    "modelo": "Metro",
    "año": 2000,
    "chasis": "5TFCM5F17AX029129"
  }, {
    "id": 11,
    "marca": "GMC",
    "modelo": "Yukon XL 2500",
    "año": 2001,
    "chasis": "WAUUL98E18A459876"
  }, {
    "id": 12,
    "marca": "Dodge",
    "modelo": "Ram 3500 Club",
    "año": 1996,
    "chasis": "1FTWX3B58AE506578"
  }, {
    "id": 13,
    "marca": "Suzuki",
    "modelo": "SX4",
    "año": 2007,
    "chasis": "WDDLJ7DB9DA158485"
  }, {
    "id": 14,
    "marca": "Volvo",
    "modelo": "C70",
    "año": 1998,
    "chasis": "WAUUL98E57A693064"
  }, {
    "id": 15,
    "marca": "Dodge",
    "modelo": "Ram 3500 Club",
    "año": 1997,
    "chasis": "YV1902MM7F1968450"
  }, {
    "id": 16,
    "marca": "Mitsubishi",
    "modelo": "Montero",
    "año": 1998,
    "chasis": "2T1KE4EE1BC769833"
  }, {
    "id": 17,
    "marca": "Pontiac",
    "modelo": "Firefly",
    "año": 1986,
    "chasis": "3GYFNAEY0BS666796"
  }, {
    "id": 18,
    "marca": "Volkswagen",
    "modelo": "Eos",
    "año": 2011,
    "chasis": "WA1VYAFE8AD100763"
  }, {
    "id": 19,
    "marca": "Audi",
    "modelo": "A3",
    "año": 2009,
    "chasis": "WBAFZ9C57CC241050"
  }, {
    "id": 20,
    "marca": "Mercury",
    "modelo": "Tracer",
    "año": 1992,
    "chasis": "1G6KD54Y94U445977"
  }];

const GetAutos = new Promise ((resolve) =>{
  setTimeout( () =>{
    resolve (autos);
  }, 2000);
});

export default GetAutos;