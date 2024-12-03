document.addEventListener("DOMContentLoaded", () => {
  let currentPlayer = "";
  const oButton = document.getElementById("oButton");
  const xButton = document.getElementById("xButton");
  const resetButton = document.getElementById("resetButton");

  oButton.addEventListener("click", () => {
    currentPlayer = "O";
    console.log("Выбран игрок: O");
  });

  xButton.addEventListener("click", () => {
    currentPlayer = "X";
    console.log("Выбран игрок: X");
  });
  resetButton.addEventListener("click", resetGame);

  const cells = document.querySelectorAll("td");
  const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (currentPlayer && cell.textContent === "") {
        cell.textContent = currentPlayer;
        if (currentPlayer === "X") {
          cell.style.color = "#ff615e";
          cell.style.fontFamily = "Arial, sans-serif";
          cell.style.fontSize = "5em";
        } else if (currentPlayer === "O") {
          cell.style.color = "#3ec5f4";
          cell.style.fontFamily = "Arial, sans-serif";
          cell.style.fontSize = "6em";
        }
        console.log(`Поставлен ${currentPlayer} в ячейку ${cell.dataset.cell}`);

        if (checkWin(currentPlayer)) {
          alert(`Игрок ${currentPlayer} выиграл!`);
          resetGame();
        }

        currentPlayer = "";
      } else if (!currentPlayer) {
        console.log("Игрок не выбран!");
      } else if (cell.textContent !== "") {
        console.log("Ячейка уже занята!");
      }
    });
  });

  function checkWin(player) {
    return winningCombinations.some((combination) => {
      return combination.every((index) => {
        return (
          document.querySelector(`td[data-cell="${index}"]`).textContent ===
          player
        );
      });
    });
  }
  function resetGame() {
    cells.forEach((cell) => {
      cell.textContent = "";
      cell.style.color = "";
      cell.style.fontFamily = "";
      cell.style.fontSize = "";
    });
    currentPlayer = "";
    console.log("Игра сброшена");
  }
});
