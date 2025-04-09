export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const today = new Date();
export const dayName = days[today.getDay()];
export const monthName = months[today.getMonth()];
export const year = today.getFullYear();
export const date = today.getDate();
console.log('Today is', dayName, monthName, date, year);

export function getweek(){
    if (dayName === 'Saturday' || dayName === 'Sunday') {
        return 'weekend';
    }else{
        return 'weekday';
    }
}

export function getmessage(){
    if (dayName === 'Saturday' || dayName === 'Sunday') {
        return 'wow! it is weekend';
    }else{
        return 'damn! it is weekday';
    }
}



export function getday(){
    return dayName;
}