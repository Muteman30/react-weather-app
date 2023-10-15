export const openWeatherTimeToDateTime = (time)=>{
    return new Date(time*1000)
}

export const timeSecsToHours = (secs)=>secs/3600;

export const dateTimeAtTimezone = (timezone) => {
    const now = new Date();
    now.setSeconds(now.getUTCHours() + timeSecsToHours(timezone));
    return now.toLocaleString()
}