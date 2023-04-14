interface Event {
  date: string
}

export default function manageCalendarEvents(
  startDate: Date,
  frequency: string,
  endDate?: Date,
  maxOccurrences?: number
) {
  const events: Event[] = []
  let currentDate = startDate
  let occurrenceCount = 0

  while (
    (endDate && currentDate <= endDate) ||
    (maxOccurrences && occurrenceCount < maxOccurrences)
  ) {
    events.push({
      date: currentDate.toISOString(),
    })

    let interval = 0
    if (frequency === 'weekly') {
      interval = 7
    } else if (frequency === 'fortnightly') {
      interval = 14
    } else if (frequency === 'monthly') {
      interval = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      ).getDate()
    }
    currentDate = new Date(currentDate.getTime() + interval * 86400000) // 86400000 = 1 day in milliseconds

    occurrenceCount++
  }
  return events
}
