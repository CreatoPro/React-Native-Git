export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJmZTFiMjU1Mi03ZDk3LTQ1NzYtYjhjYy03ODZkYTljZDFkODkiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2MTgzNzIzNywiZXhwIjoxNjYyNDQyMDM3fQ.YYcPTkhGdoY6FyVpA4nB8Ev4WUGdDj6aWCqv7FInDbQ';
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v1/meetings`, {
    method: "POST",
    headers: {
      authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ region: "sg001" }),
  });

  const { meetingId } = await res.json();
  return meetingId;
};