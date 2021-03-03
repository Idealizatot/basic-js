const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date = '*****') {


  if (date === '*****') {
    return 'Unable to determine the time of year!';
  }

  if (!date || !(date instanceof Date)) {
    throw Error
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw Error
  }

  if (!Object.prototype.toString.call(date) === '[object.Date]'){throw new Error();}

  const seasons = {
    0 : 'spring', 
    1 : 'summer', 
    2 : 'autumn', 
    3 : 'winter'
  }

  let monthCount = date.getMonth();
  let month = 'Unable to determine the time of year!';
  switch (monthCount) {
    case 2:
    case 3:
    case 4:
      month = seasons[0];
      break;
    case 5:
    case 6:
    case 7:
      month = seasons[1];
      break;
    case 8:
    case 9:
    case 10:
      month = seasons[2];
      break;
    case 11:
    case 0:
    case 1:
      month = seasons[3];
      break;
  }

  return month
  
};

// function getSeason(date = '*****') {

  

//   const seasons = {
//     0 : 'spring', 
//     1 : 'summer', 
//     2 : 'autumn', 
//     3 : 'winter'
//   }

//   let monthCount = date.getMonth();
//   let month = 'Unable to determine the time of year!';
//   switch (monthCount) {
//     case 2:
//     case 3:
//     case 4:
//       month = seasons[0];
//       break;
//     case 5:
//     case 6:
//     case 7:
//       month = seasons[1];
//       break;
//     case 8:
//     case 9:
//     case 10:
//       month = seasons[2];
//       break;
//     case 11:
//     case 0:
//     case 1:
//       month = seasons[3];
//       break;
//   }

//   return month
  
// };

// getSeason(null) 
