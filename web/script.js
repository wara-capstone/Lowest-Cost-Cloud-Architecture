const BASE_URL = 'http://223.130.137.75';

document.getElementById('generateTraffic1000').addEventListener('click', function() {
    performRequest('generateTraffic1000');
});

document.getElementById('generateTraffic10000').addEventListener('click', function() {
    performRequest('generateTraffic10000');
});
document.getElementById('prevPage').addEventListener('click', function() {
    changePage(-1);
});
document.getElementById('nextPage').addEventListener('click', function() {
    changePage(1);
});
document.getElementById('sendData').addEventListener('click', getFruitInstance);

document.getElementById('showAll').addEventListener('click', function() {
    if (isShowingAll) {
        isShowingAll = false;
        renderTable();
    } else {
        showAllRows();
    }
});

let isShowingAll = false;

function getFruitInstance() {
    const startTime = new Date();
    const selectedFruit = document.getElementById('fruitSelection').value;
    const loadingTimeSendData = document.getElementById('loadingTimeSendData');

    fetch(`${BASE_URL}/fruits/?name=${selectedFruit}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        const endTime = new Date();
        const elapsedTime = (endTime - startTime) / 1000;
        loadingTimeSendData.textContent += ` ${elapsedTime.toFixed(2)} 초`;

        const tbody = document.getElementById('responseBody');
        while(tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }

        data.forEach((fruit, index) => {
            const newRow = tbody.insertRow();
            const numberCell = newRow.insertCell(0);
            numberCell.className = 'numberCell';
            const fruitCell = newRow.insertCell(1);
            const responseCell = newRow.insertCell(2);

            numberCell.textContent = index + 1;
            fruitCell.textContent = fruit.name;
            responseCell.textContent = fruit.message;
        });

        currentPage = 1;  // 페이지 초기화
        renderTable();    // 테이블 재렌더링
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').innerText = 'Error occurred while fetching fruit instance data.';
    });
}

async function performRequest(buttonId) {
    const selectedFruit = document.getElementById('fruitSelection').value;
    const loadingDiv = document.getElementById('loading');
    const loadingTimeDiv = document.getElementById('loadingTime');
    const recordTimeDiv = {
        sendData: document.getElementById('loadingTimeSendData'),
        generateTraffic1000: document.getElementById('loadingTime1000'),
        generateTraffic10000: document.getElementById('loadingTime10000')
    }[buttonId];

    const startTime = new Date();
    
    let secondsPassed = 0.00;
    loadingDiv.style.display = 'flex';

    const interval = setInterval(() => {
        secondsPassed += 0.01; // Increase by 0.1 every 100ms
        loadingTimeDiv.textContent = `${secondsPassed.toFixed(2)} seconds`;
    }, 10); // Run every 100ms

    let fetchCount = 1;
    if (buttonId === 'generateTraffic1000') fetchCount = 1000;
    if (buttonId === 'generateTraffic10000') fetchCount = 10000;

    const requestBody = (buttonId === 'sendData') ? { fruit: selectedFruit } : { fruit: 'ready' };
    const CHUNK_SIZE = 50;
    let completedRequests = 0;

    try {
        for (let i = 0; i < fetchCount; i += CHUNK_SIZE) {
            const fetchPromises = [];
            for (let j = i; j < i + CHUNK_SIZE && j < fetchCount; j++) {
                fetchPromises.push(
                    fetch(`${BASE_URL}/fruits/`, {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(requestBody)
                    })
                    .then(response => response.json())
                    .catch(error => {
                        console.error('Error:', error);
                    })
                );
            }

            await Promise.all(fetchPromises);
            completedRequests += fetchPromises.length;
            console.log(`${completedRequests} requests completed.`);
        }
    } finally {
        clearInterval(interval);

        const endTime = new Date();
        const elapsedTime = (endTime - startTime) / 1000;
        recordTimeDiv.textContent += ` ${elapsedTime.toFixed(2)} seconds`;
        
        loadingDiv.style.display = 'none';
    }
}

function showAllRows() {
    const table = document.getElementById("responseBody");
    const rows = table.querySelectorAll("tr");

    // 모든 행을 표시
    rows.forEach(row => {
        row.style.display = '';
    });

    isShowingAll = true; // 전체 보기 모드 활성화
}

function changePage(direction) {
    currentPage += direction;
    renderTable();
}

let currentPage = 1;
const rowsPerPage = 20;

function renderTable() {
    if (isShowingAll) {
        isShowingAll = false;
    }

    const table = document.getElementById("responseBody");
    const rows = table.querySelectorAll("tr");
    const totalRows = rows.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);

    document.getElementById("pageIndicator").textContent = `${currentPage} / ${totalPages}`;

    rows.forEach(row => {
        row.style.display = 'none';
    });

    for(let i = (currentPage - 1) * rowsPerPage; i < currentPage * rowsPerPage && i < totalRows; i++) {
        rows[i].style.display = '';
    }

    document.getElementById("prevPage").disabled = currentPage === 1;
    document.getElementById("nextPage").disabled = currentPage * rowsPerPage >= totalRows;
}

// 초기 테이블 렌더링
renderTable();