export function convertFloatToTimeString(hoursFloat) {
  // Separate the hours and the fractional part
  const hours = hoursFloat > 0 ? Math.floor(hoursFloat) : Math.ceil(hoursFloat);
  const minutes = Math.abs(Math.round((hoursFloat - hours) * 60));

  // Format hours and minutes to ensure two digits
  const paddedHours = String(hours).padStart(2, '0');
  const paddedMinutes = String(minutes).padStart(2, '0');

  // Combine into a HH:mm format
  return `${paddedHours}:${paddedMinutes}`;
}
