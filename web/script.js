document.getElementById('sendData').addEventListener('click', function() {
    const selectedFruit = document.getElementById('fruitSelection').value;

    const loadingDiv = document.getElementById('loading');
    const loadingTimeDiv = document.getElementById('loadingTime');
    const startTime = new Date(); // 요청 시작 시간

    loadingDiv.style.display = 'flex'; // 로딩 창 표시

    // Fetch API를 사용하여 선택한 과일에 대한 데이터를 스프링 부트로 POST 요청
    fetch('/api/data', {
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

        loadingTimeDiv.innerText = `Loaded in ${elapsedTime} seconds`; // 로딩 시간 표시

        setTimeout(() => { 
            loadingDiv.style.display = 'none'; // 로딩 창 숨기기
        }, 2000); // 2초 후에 로딩 창을 숨깁니다.

        const tbody = document.getElementById('responseBody');
        const newRow = tbody.insertRow();
        const fruitCell = newRow.insertCell(0);
        const responseCell = newRow.insertCell(1);
        fruitCell.textContent = selectedFruit;
        responseCell.textContent = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').innerText = 'Error occurred while fetching data.';
        loadingDiv.style.display = 'none'; // 에러 발생 시 로딩 창 숨기기
    });
});
