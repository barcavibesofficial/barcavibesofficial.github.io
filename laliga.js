const API_URL = "https://api.openligadb.de/getbltable/laliga";

async function loadLaLigaTable() {
    const tableBody = document.getElementById("laliga-body");

    tableBody.innerHTML = `
        <tr>
            <td colspan="8">Loading...</td>
        </tr>
    `;

    try {
        const response = await fetch(API_URL, {
            method: "GET"
        });

        if (!response.ok) {
            throw new Error("API Error");
        }

        const data = await response.json();

        tableBody.innerHTML = "";

        data.forEach((team, index) => {
            tableBody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${team.teamName}</td>
                    <td>${team.matches}</td>
                    <td>${team.won}</td>
                    <td>${team.draw}</td>
                    <td>${team.lost}</td>
                    <td>${team.goalDiff}</td>
                    <td>${team.points}</td>
                </tr>
            `;
        });

    } catch (error) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="8">
                    Cannot load table.<br>
                    API unavailable.
                </td>
            </tr>
        `;
        console.error(error);
    }
}

loadLaLigaTable();
