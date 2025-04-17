function getConfiguration(config)
{
  // Esta función permite indicar valores de configuración generales para 
  // todos los dispositivos de este modelo.
  
  // Dependiendo del significado de la "dirección del dispositivo" en este 
  // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
  // para hacer referencia a la dirección en la interfaz de usuario.
  // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
  // MAC, es posible que desee utilizar el código siguiente.
  
  config.addressLabel = {en: "MAC", es: "MAC"};
}

function getEndpoints(deviceAddress, endpoints) {
var e1 = endpoints.addEndpoint("1", "Hora 1", endpointType.genericSensor);
e1.variableTypeId = 1396;
var e2 = endpoints.addEndpoint("2", "Hora 2", endpointType.genericSensor);
e2.variableTypeId = 1396;
var e3 = endpoints.addEndpoint("3", "Hora 3", endpointType.genericSensor);
e3.variableTypeId = 1396;
var e4 = endpoints.addEndpoint("4", "Hora 4", endpointType.genericSensor);
e4.variableTypeId = 1396;
var e5 = endpoints.addEndpoint("5", "Hora 5", endpointType.genericSensor);
e5.variableTypeId = 1396;
var e6 = endpoints.addEndpoint("6", "Hora 6", endpointType.genericSensor);
e6.variableTypeId = 1396;
var e7 = endpoints.addEndpoint("7", "Hora 7", endpointType.genericSensor);
e7.variableTypeId = 1396;
var e8 = endpoints.addEndpoint("8", "Hora 8", endpointType.genericSensor);
e8.variableTypeId = 1396;
var e9 = endpoints.addEndpoint("9", "Hora 9", endpointType.genericSensor);
e9.variableTypeId = 1396;
var e10 = endpoints.addEndpoint("10", "Hora 10", endpointType.genericSensor);
e10.variableTypeId = 1396;
var e11 = endpoints.addEndpoint("11", "Hora 11", endpointType.genericSensor);
e11.variableTypeId = 1396;
var e12 = endpoints.addEndpoint("12", "Hora 12", endpointType.genericSensor);
e12.variableTypeId = 1396;
var e13 = endpoints.addEndpoint("13", "Hora 13", endpointType.genericSensor);
e13.variableTypeId = 1396;
var e14 = endpoints.addEndpoint("14", "Hora 14", endpointType.genericSensor);
e14.variableTypeId = 1396;
var e15 = endpoints.addEndpoint("15", "Hora 15", endpointType.genericSensor);
e15.variableTypeId = 1396;
var e16 = endpoints.addEndpoint("16", "Hora 16", endpointType.genericSensor);
e16.variableTypeId = 1396;
var e17 = endpoints.addEndpoint("17", "Hora 17", endpointType.genericSensor);
e17.variableTypeId = 1396;
var e18 = endpoints.addEndpoint("18", "Hora 18", endpointType.genericSensor);
e18.variableTypeId = 1396;
var e19 = endpoints.addEndpoint("19", "Hora 19", endpointType.genericSensor);
e19.variableTypeId = 1396;
var e20 = endpoints.addEndpoint("20", "Hora 20", endpointType.genericSensor);
e20.variableTypeId = 1396;
var e21 = endpoints.addEndpoint("21", "Hora 21", endpointType.genericSensor);
e21.variableTypeId = 1396;
var e22 = endpoints.addEndpoint("22", "Hora 22", endpointType.genericSensor);
e22.variableTypeId = 1396;
var e23 = endpoints.addEndpoint("23", "Hora 23", endpointType.genericSensor);
e23.variableTypeId = 1396;
var e24 = endpoints.addEndpoint("24", "Hora 24", endpointType.genericSensor);
e24.variableTypeId = 1396;
//CLORO
var e25 = endpoints.addEndpoint("25", "Cloro 25", endpointType.genericSensor);
e25.variableTypeId = 1404;
var e26 = endpoints.addEndpoint("26", "Cloro 26", endpointType.genericSensor);
e26.variableTypeId = 1404;
var e27 = endpoints.addEndpoint("27", "Cloro 27", endpointType.genericSensor);
e27.variableTypeId = 1404;
var e28 = endpoints.addEndpoint("28", "Cloro 28", endpointType.genericSensor);
e28.variableTypeId = 1404;
var e29 = endpoints.addEndpoint("29", "Cloro 29", endpointType.genericSensor);
e29.variableTypeId = 1404;
var e30 = endpoints.addEndpoint("30", "Cloro 30", endpointType.genericSensor);
e30.variableTypeId = 1404;
var e31 = endpoints.addEndpoint("31", "Cloro 31", endpointType.genericSensor);
e31.variableTypeId = 1404;
var e32 = endpoints.addEndpoint("32", "Cloro 32", endpointType.genericSensor);
e32.variableTypeId = 1404;
var e33 = endpoints.addEndpoint("33", "Cloro 33", endpointType.genericSensor);
e33.variableTypeId = 1404;
var e34 = endpoints.addEndpoint("34", "Cloro 34", endpointType.genericSensor);
e34.variableTypeId = 1404;
var e35 = endpoints.addEndpoint("35", "Cloro 35", endpointType.genericSensor);
e35.variableTypeId = 1404;
var e36 = endpoints.addEndpoint("36", "Cloro 36", endpointType.genericSensor);
e36.variableTypeId = 1404;
var e37 = endpoints.addEndpoint("37", "Cloro 37", endpointType.genericSensor);
e37.variableTypeId = 1404;
var e38 = endpoints.addEndpoint("38", "Cloro 38", endpointType.genericSensor);
e38.variableTypeId = 1404;
var e39 = endpoints.addEndpoint("39", "Cloro 39", endpointType.genericSensor);
e39.variableTypeId = 1404;
var e40 = endpoints.addEndpoint("40", "Cloro 40", endpointType.genericSensor);
e40.variableTypeId = 1404;
var e41 = endpoints.addEndpoint("41", "Cloro 41", endpointType.genericSensor);
e41.variableTypeId = 1404;
var e42 = endpoints.addEndpoint("42", "Cloro 42", endpointType.genericSensor);
e42.variableTypeId = 1404;
var e43 = endpoints.addEndpoint("43", "Cloro 43", endpointType.genericSensor);
e43.variableTypeId = 1404;
var e44 = endpoints.addEndpoint("44", "Cloro 44", endpointType.genericSensor);
e44.variableTypeId = 1404;
var e45 = endpoints.addEndpoint("45", "Cloro 45", endpointType.genericSensor);
e45.variableTypeId = 1404;
var e46 = endpoints.addEndpoint("46", "Cloro 46", endpointType.genericSensor);
e46.variableTypeId = 1404;
var e47 = endpoints.addEndpoint("47", "Cloro 47", endpointType.genericSensor);
e47.variableTypeId = 1404;
var e48 = endpoints.addEndpoint("48", "Cloro 48", endpointType.genericSensor);
e48.variableTypeId = 1404;
//pH
var e49 = endpoints.addEndpoint("49", "pH 49", endpointType.genericSensor);
e49.variableTypeId = 1405;
var e50 = endpoints.addEndpoint("50", "pH 50", endpointType.genericSensor);
e50.variableTypeId = 1405;
var e51 = endpoints.addEndpoint("51", "pH 51", endpointType.genericSensor);
e51.variableTypeId = 1405;
var e52 = endpoints.addEndpoint("52", "pH 52", endpointType.genericSensor);
e52.variableTypeId = 1405;
var e53 = endpoints.addEndpoint("53", "pH 53", endpointType.genericSensor);
e53.variableTypeId = 1405;
var e54 = endpoints.addEndpoint("54", "pH 54", endpointType.genericSensor);
e54.variableTypeId = 1405;
var e55 = endpoints.addEndpoint("55", "pH 55", endpointType.genericSensor);
e55.variableTypeId = 1405;
var e56 = endpoints.addEndpoint("56", "pH 56", endpointType.genericSensor);
e56.variableTypeId = 1405;
var e57 = endpoints.addEndpoint("57", "pH 57", endpointType.genericSensor);
e57.variableTypeId = 1405;
var e58 = endpoints.addEndpoint("58", "pH 58", endpointType.genericSensor);
e58.variableTypeId = 1405;
var e59 = endpoints.addEndpoint("59", "pH 59", endpointType.genericSensor);
e59.variableTypeId = 1405;
var e60 = endpoints.addEndpoint("60", "pH 60", endpointType.genericSensor);
e60.variableTypeId = 1405;
var e61 = endpoints.addEndpoint("61", "pH 61", endpointType.genericSensor);
e61.variableTypeId = 1405;
var e62 = endpoints.addEndpoint("62", "pH 62", endpointType.genericSensor);
e62.variableTypeId = 1405;
var e63 = endpoints.addEndpoint("63", "pH 63", endpointType.genericSensor);
e63.variableTypeId = 1405;
var e64 = endpoints.addEndpoint("64", "pH 64", endpointType.genericSensor);
e64.variableTypeId = 1405;
var e65 = endpoints.addEndpoint("65", "pH 65", endpointType.genericSensor);
e65.variableTypeId = 1405;
var e66 = endpoints.addEndpoint("66", "pH 66", endpointType.genericSensor);
e66.variableTypeId = 1405;
var e67 = endpoints.addEndpoint("67", "pH 67", endpointType.genericSensor);
e67.variableTypeId = 1405;
var e68 = endpoints.addEndpoint("68", "pH 68", endpointType.genericSensor);
e68.variableTypeId = 1405;
var e69 = endpoints.addEndpoint("69", "pH 69", endpointType.genericSensor);
e69.variableTypeId = 1405;
var e70 = endpoints.addEndpoint("70", "pH 70", endpointType.genericSensor);
e70.variableTypeId = 1405;
var e71 = endpoints.addEndpoint("71", "pH 71", endpointType.genericSensor);
e71.variableTypeId = 1405;
var e72 = endpoints.addEndpoint("72", "pH 72", endpointType.genericSensor);
e72.variableTypeId = 1405;
}

function validateDeviceAddress(address, result)
{
  // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
  // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
  // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
  // caso de que el formato de la dirección sea incorrecto.
  
  // En el código siguiente, se realiza una validación para asegurarse de que la 
  // dirección tiene exactamente 10 caracteres.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
  // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
  // de endpoints manualmente al dispositivo después de que se creó.

  // En el código siguiente, el agregado manual de endpoints está deshabilitada 
  // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
  // endpoints definidos por la función getEndpoints() anterior.
  
  // rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario para cada
  // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
  // eliminación de endpoints, o la edición de subtipo de endpoint.

  // En el código siguiente, se definen las siguientes reglas:
  // - Los endpoints no se pueden eliminar.
  // - El subtipo de endpoint se puede cambiar, pero solo para el segundo endpoint.
  
  // rules.canDelete = false;
  // rules.canEditSubType = (endpoint.address == "2");
}
