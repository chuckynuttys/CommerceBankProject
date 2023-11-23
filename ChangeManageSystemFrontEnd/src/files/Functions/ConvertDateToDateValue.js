function convertDateToDateValue(date, type, amOrpm) {
  switch (type) {
    case "Year":
      return parseInt(date);

    case "Month":
      switch (date) {
        case "January":
          return 0;
        case "Febuary":
          return 1;
        case "March":
          return 2;
        case "April":
          return 3;
        case "May":
          return 4;
        case "June":
          return 5;
        case "July":
          return 6;
        case "August":
          return 7;
        case "September":
          return 8;
        case "October":
          return 9;
        case "November":
          return 10;
        case "December":
          return 11;
      }
      break;
    case "Day":
      switch (date) {
        case "1st":
          return 1;
        case "2nd":
          return 2;
        case "3rd":
          return 3;
        case "4th":
          return 4;
        case "5th":
          return 5;
        case "6th":
          return 6;
        case "7th":
          return 7;
        case "8th":
          return 8;
        case "9th":
          return 9;
        case "10th":
          return 10;
        case "11th":
          return 11;
        case "12th":
          return 12;
        case "13th":
          return 13;
        case "14th":
          return 14;
        case "15th":
          return 15;
        case "16th":
          return 16;
        case "17th":
          return 17;
        case "18th":
          return 18;
        case "19th":
          return 19;
        case "20th":
          return 20;
        case "21st":
          return 21;
        case "22nd":
          return 22;
        case "23rd":
          return 23;
        case "24th":
          return 24;
        case "25th":
          return 25;
        case "26th":
          return 26;
        case "27th":
          return 27;
        case "28th":
          return 28;
        case "29th":
          return 29;
        case "30th":
          return 30;
        default:
          return 31;
      }
    case "Hour":
      date = parseInt(date);
      if (date == 12 && amOrpm == "AM") {
        date = 0;
        return date;
      } else if (date > 12 && amOrpm == "PM") {
        date = date + 12;
        return date;
      } else {
        return date;
      }
    case "Minute":
      return parseInt(date);
  }
}

export { convertDateToDateValue };
