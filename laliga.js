const API_KEY = "6e65973ffb7e4e4e995cfd15aed8fb1a";

const API_URL = "https://api.football-data.org/v4/competitions/PD/standings";

async function loadLaLigaTable() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        "X-Auth-Token": API_KEY
      }
    });

    if (!response.ok) {
      throw new Error("API Error " + response.status);
    }

    const data = await response.json();

    const tableBody = document.getElementById("laliga-body");
    tableBody.innerHTML = "";

    data.standings[0].table.forEach(team => {
      tableBody.innerHTML += `
        <tr>
          <td>${team.position}</td>
          <td>${team.team.name}</td>
          <td>${team.playedGames}</td>
          <td>${team.won}</td>
          <td>${team.draw}</td>
          <td>${team.lost}</td>
          <td>${team.goalDifference}</td>
          <td>${team.points}</td>
        </tr>`;
    });

  } catch (error) {
    document.getElementById("laliga-body").innerHTML =
        `<tr><td colspan="8">Error: ${error.message}</td></tr>`;
    console.error(error);
  }
}

loadLaLigaTable();
