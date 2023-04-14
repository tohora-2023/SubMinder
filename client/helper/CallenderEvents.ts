interface Event {
  title: string
  start: Date
  end: Date
  category: 'time'
}

export default function manageCalendarEvents(
  startDate: Date,
  frequency: 'weekly' | 'fortnightly' | 'monthly',
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
      title: 'My event',
      start: currentDate,
      end: currentDate,
      category: 'time',
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
