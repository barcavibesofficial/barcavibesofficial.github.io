const teams = [
  { pos: 1, team: "Barcelona", played: 0, won: 0, draw: 0, lost: 0, gd: 0, pts: 0 },
  { pos: 2, team: "Real Madrid", played: 0, won: 0, draw: 0, lost: 0, gd: 0, pts: 0 },
  { pos: 3, team: "Atlético Madrid", played: 0, won: 0, draw: 0, lost: 0, gd: 0, pts: 0 },
  { pos: 4, team: "Athletic Club", played: 0, won: 0, draw: 0, lost: 0, gd: 0, pts: 0 },
  { pos: 5, team: "Villarreal", played: 0, won: 0, draw: 0, lost: 0, gd: 0, pts: 0 },
  { pos: 6, team: "Real Betis", played: 0, won: 0, draw: 0, lost: 0, gd: 0, pts: 0 },
  { pos: 7, team: "Real Sociedad", played: 0, won: 0, draw: 0, lost: 0, gd: 0, pts: 0 },
  { pos: 8, team: "Sevilla", played: 0, won: 0, draw: 0, lost: 0, gd: 0, pts: 0 },
  { pos: 9, team: "Valencia", played: 0, won: 0, draw: 0, lost: 0, gd: 0, pts: 0 },
  { pos: 10, team: "Celta Vigo", played: 0, won: 0, draw: 0, lost: 0, gd: 0, pts: 0 },
  { pos: 11, team: "Osasuna", played: 0, won: 0, draw: 0, lost: 0, gd: 0, pts: 0 },
  { pos: 12, team: "Getafe", played: 0, won: 0, draw: 0, lost: 0, gd: 0, pts: 0 },
  { pos: 13, team: "Rayo Vallecano", played: 0, won: 0, draw: 0, lost: 0, gd: 0, pts: 0 },
  { pos: 14, team: "Espanyol", played: 0, won: 0, draw: 0, lost: 0, gd: 0, pts: 0 },
  { pos: 15, team: "Mallorca", played: 0, won: 0, draw: 0, lost: 0, gd: 0, pts: 0 },
  { pos: 16, team: "Girona", played: 0, won: 0, draw: 0, lost: 0, gd: 0, pts: 0 },
  { pos: 17, team: "Levante", played: 0, won: 0, draw: 0, lost: 0, gd: 0, pts: 0 },
  { pos: 18, team: "Elche", played: 0, won: 0, draw: 0, lost: 0, gd: 0, pts: 0 },
  { pos: 19, team: "Oviedo", played: 0, won: 0, draw: 0, lost: 0, gd: 0, pts: 0 },
  { pos: 20, team: "Alavés", played: 0, won: 0, draw: 0, lost: 0, gd: 0, pts: 0 }
];

const tbody = document.getElementById("laliga-body");

tbody.innerHTML = "";

teams.forEach(team => {
  tbody.innerHTML += `
    <tr>
      <td>${team.pos}</td>
      <td>${team.team}</td>
      <td>${team.played}</td>
      <td>${team.won}</td>
      <td>${team.draw}</td>
      <td>${team.lost}</td>
      <td>${team.gd}</td>
      <td>${team.pts}</td>
    </tr>
  `;
});
