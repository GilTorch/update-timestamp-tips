const timestamp = 1694277683;
const dateFromTimestamp = new Date(timestamp*1000);
console.log(dateFromTimestamp)
const formattedData = dateFromTimestamp.toLocaleDateString();
console.log(formattedData)
console.log("Date: "+ dateFromTimestamp.getDate()+
           "/"+(dateFromTimestamp.getMonth()+1)+
           "/"+dateFromTimestamp.getFullYear()+
           " "+dateFromTimestamp.getHours()+
           ":"+dateFromTimestamp.getMinutes()+
           ":"+dateFromTimestamp.getSeconds());
