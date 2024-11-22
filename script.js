$(document).ready(function () {
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    let currentPlayer = 'X';
    let gameActive = true;

    $("#reiniciar").click(()=>{
        initializeBoard()
    })
    function checkWinner() {
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
                return true;
            }
        }
        for (let i = 0; i < 3; i++) {
            if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
                return true;
            }
        }
        if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
            return true;
        }
        if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
            return true;
        }
        return false;
    }

    function isDraw() {
        return board.flat().every(cell => cell !== '');
    }

    function updateStatus(message) {
        $('#status').text(message);
    }

    function handleClick() {
        if (!gameActive || $(this).hasClass('taken')) return;

        const row = $(this).data('row');
        const col = $(this).data('col');

        board[row][col] = currentPlayer;
        $(this).text(currentPlayer).addClass('taken');

        if (checkWinner()) {
            updateStatus(`Jogador ${currentPlayer} venceu!`);
            gameActive = false;
            return;
        }

        if (isDraw()) {
            updateStatus("Empate!");
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateStatus(`Vez do jogador: ${currentPlayer}`);
    }

    function initializeBoard() {
        const $board = $('#board');
        $board.empty();
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                $('<div>')
                    .addClass('cell')
                    .data('row', i)
                    .data('col', j)
                    .appendTo($board)
                    .on('click', handleClick);
            }
        }
    }

    initializeBoard();
});