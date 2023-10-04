const BASE_URL = 'http://192.17.15.1';

document.getElementById('sendData').addEventListener('click', function() {
    performRequest('sendData');
});

document.getElementById('generateTraffic1000').addEventListener('click', function() {
    performRequest('generateTraffic1000');
});

document.getElementById('generateTraffic10000').addEventListener('click', function() {
    performRequest('generateTraffic10000');
});

function performRequest(buttonId) {
    const selectedFruit = document.getElementById('fruitSelection').value;

    const loadingDiv = document.getElementById('loading');
    const loadingTimeDiv = {
        sendData: document.getElementById('loadingTimeSendData'),
        generateTraffic1000: document.getElementById('loadingTime1000'),
        generateTraffic10000: document.getElementById('loadingTime10000')
    }[buttonId];

    const startTime = new Date(); // 요청 시작 시간

    loadingDiv.style.display = 'flex'; // 로딩 창 표시

    let fetchCount = 1;
    if(buttonId === 'generateTraffic1000') fetchCount = 1000;
    if(buttonId === 'generateTraffic10000') fetchCount = 10000;

    for(let i = 0; i < fetchCount; i++) {
        fetch(`${BASE_URL}/api/data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fruit: selectedFruit })
        })
        .then(response => response.json())
        .then(data => {
            const endTime = new Date(); // 요청 완료 시간
            const elapsedTime = (endTime - startTime) / 1000; // 초 단위로 경과 시간 계산

            loadingTimeDiv.innerText = `Loaded in ${elapsedTime.toFixed(2)} seconds`; // 로딩 시간 표시

            if(buttonId === 'sendData') {
                const tbody = document.getElementById('responseBody');
                const newRow = tbody.insertRow();
                const fruitCell = newRow.insertCell(0);
                const responseCell = newRow.insertCell(1);
                fruitCell.textContent = selectedFruit;
                responseCell.textContent = data.message;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('response').innerText = 'Error occurred while fetching data.';
            loadingDiv.style.display = 'none'; // 에러 발생 시 로딩 창 숨기기
        })
        .finally(() => {
            if (i === fetchCount - 1) { // 마지막 요청이 완료되면 로딩 창을 숨깁니다.
                setTimeout(() => {
                    loadingDiv.style.display = 'none';
                }, 2000); // 2초 후에 로딩 창을 숨깁니다.
            }
        });
    }
}
