function convertDateValueToDate(date, type, amOrpm) {
  switch (type) {
    case "Year":
      return date.toString();

    case "Month":
      switch (date) {
        case 0:
          return "January";
        case 1:
          return "Febuary";
        case 2:
          return "March";
        case 3:
          return "April";
        case 4:
          return "May";
        case 5:
          return "June";
        case 6:
          return "July";
        case 7:
          return "August";
        case 8:
          return "September";
        case 9:
          return "October";
        case 10:
          return "November";
        case 11:
          return "December";
      }
      break;
    case "Day":
      switch (date) {
        case 1:
          return "1st";
        case 2:
          return "2nd";
        case 3:
          return "3rd";
        case 4:
          return "4th";
        case 5:
          return "5th";
        case 6:
          return "6th";
        case 7:
          return "7th";
        case 8:
          return "8th";
        case 9:
          return "9th";
        case 10:
          return "10th";
        case 11:
          return "11th";
        case 12:
          return "12th";
        case 13:
          return "13th";
        case 14:
          return "14th";
        case 15:
          return "15th";
        case 16:
          return "16th";
        case 17:
          return "17th";
        case 18:
          return "18th";
        case 19:
          return "19th";
        case 20:
          return "20th";
        case 21:
          return "21st";
        case 22:
          return "22nd";
        case 23:
          return "23rd";
        case 24:
          return "24th";
        case 25:
          return "25th";
        case 26:
          return "26th";
        case 27:
          return "27th";
        case 28:
          return "28th";
        case 29:
          return "29th";
        case 30:
          return "30th";
        default:
          return "31st";
      }
    case "Hour":
      date = parseInt(date);
      if (date == 0) {
        date = 12;
        return date.toString() + " AM";
      } else if (date > 12) {
        date = date - 12;
        return date.toString() + " PM";
      } else {
        return date.toString() + " AM";
      }
    case "Minute":
      if (amOrpm == "AM") {
        return date.toString() + " AM";
      } else {
        return date.toString() + " PM";
      }
  }
}

export { convertDateValueToDate };
