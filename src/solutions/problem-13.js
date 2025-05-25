// Problem #13 Solution: Meeting Scheduling Conflicts

function findMeetingConflicts(meetings) {
  const rooms = {};

  const conflicts = [];

  for (const meeting of meetings) {
    rooms[meeting.room] = rooms[meeting.room] || [];

    for (const other of rooms[meeting.room]) {
      if (
        !(
          meeting.endTime <= other.startTime ||
          meeting.startTime >= other.endTime
        )
      ) {
        conflicts.push(meeting);

        break;
      }
    }

    rooms[meeting.room].push(meeting);
  }

  return conflicts;
}

const meetings = [
  { room: "101", startTime: "09:00", endTime: "10:00" },
  { room: "101", startTime: "09:30", endTime: "11:00" },
  { room: "102", startTime: "09:00", endTime: "10:00" },
  { room: "101", startTime: "11:00", endTime: "12:00" },
  { room: "101", startTime: "09:45", endTime: "10:15" },
];

console.log("Problem #13 Output:", findMeetingConflicts(meetings));

/*
[ 
  { room: "101", startTime: "09:30", endTime: "11:00" },
  { room: "101", startTime: "09:45", endTime: "10:15" }
]
*/
