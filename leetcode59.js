// 1360 Number of Days Between Two Dates

// Example 1:

// Input: 
let date1a = "2019-06-29", date2a = "2019-06-30";
// Output: 1
// Example 2:

// Input: 
let date1b = "2020-01-15", date2b = "2019-12-31"
// Output: 15

const daysBetweenDates = (date1, date2) => {
    const msInADay = 1000*60*60*24;    //24hr 60min 60sec 1000ms
    let firstDate=new Date(date1).getTime()
    let secondDate=new Date(date2).getTime()
    let days = Math.abs((firstDate - secondDate) / msInADay);
    return days
}

console.log(daysBetweenDates(date1b,date2b));