const complimentBtn = document.querySelector("#complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.querySelector("#fortuneButton");

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

fortuneBtn.addEventListener('click', getFortune);

const luckyNumberBtn = document.querySelector("#luckyNumberButton");

const getLuckyNumber = () => {
    axios.get("http://localhost:4000/api/lucky-number/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

luckyNumberBtn.addEventListener('click', getLuckyNumber);

const dateBtn = document.querySelector("#dateButton");

const getCurrentDate = () => {
    axios.get("http://localhost:4000/api/current-date/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

dateBtn.addEventListener('click', getCurrentDate);

const babyNameBtn = document.querySelector("#babyNameButton");

const getRandomBabyName = () => {
    axios.get("http://localhost:4000/api/baby-name/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

babyNameBtn.addEventListener('click', getRandomBabyName);

