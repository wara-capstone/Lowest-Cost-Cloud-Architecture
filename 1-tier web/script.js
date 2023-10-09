const BASE_URL = '/api';


document.getElementById('generateTraffic1000').addEventListener('click', function() {
    performRequest('generateTraffic1000');
});

document.getElementById('generateTraffic10000').addEventListener('click', function() {
    performRequest('generateTraffic10000');
});

document.getElementById('sendData').addEventListener('click', getFruitInstance);

let isShowingAll = false;
function getFruitInstance() {
    const startTime = new Date();  // 요청 시작 시간 기록
    const selectedFruit = document.getElementById('fruitSelection').value;
    const loadingTimeSendDataSpan = document.querySelector('#loadingTimeSendData span');

    fetch(`${BASE_URL}/fruits/${selectedFruit}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        const endTime = new Date();  // 응답을 받은 시간 기록
        const elapsedTime = (endTime - startTime) / 1000;
        loadingTimeSendDataSpan.textContent += `${elapsedTime.toFixed(2)} 초`;  // 응답까지 걸린 시간을 출력
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


