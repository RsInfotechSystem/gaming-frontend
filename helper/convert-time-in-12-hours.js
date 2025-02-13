export function convertTo12HourFormat(time24) {
    // First, let's make sure we have a valid time string
    if (!/^\d{2}:\d{2}:\d{2}$/.test(time24)) {
        return "Invalid time format";
    }

    // Split the time string into hours, minutes, and seconds
    const [hours, minutes, seconds] = time24.split(':').map(Number);

    // Determine if it's AM or PM
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    const hours12 = hours % 12 || 12;

    // Create the formatted time string
    const time12 = `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;

    return time12;
}