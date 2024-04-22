function formattedDate(dateTimeString: Date) {
  const formatDate = new Date(dateTimeString);

  const year = formatDate.getFullYear();
  const month = formatDate.getMonth();
  const date = formatDate.getDate();
  const hours = String(formatDate.getHours()).padStart(2, '0')
  const minute = String(formatDate.getMinutes()).padStart(2, '0')
  const second = String(formatDate.getSeconds()).padStart(2, '0')

  const monthName = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const monthNameFormatted = monthName[month];

  return `${date}  ${monthNameFormatted}  ${year} - ${hours}:${minute}:${second}`;
}

export default formattedDate