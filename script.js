// setTimeout(() => {
//     console.log('I love you O...');
// }, 3000)

// setTimeout(() =>{
//     alert('Look for background')
//     document.body.style.backgroundColor = 'red'
// }, 5000)

let count = 0;

// let timer = setInterval(() => {
//     console.log("Qadam:", count);
//     count++;

//     if(count>5){
//         clearInterval(timer)
//         console.log('Tayyor');

//     }
// }, 1000)

let wrapper = document.querySelector(".wrapper");
        let div = document.createElement("div");
        wrapper.append(div);

        let timer = setInterval(() => {
            let now = new Date();

            let hour = now.getHours();

            if (hour >= 17) {
                document.body.style.backgroundColor = "blue";     
            } else {
                document.body.style.backgroundColor = "yellow";   
            }

            div.innerHTML = `
                <div>
                    <p style="
                        background: linear-gradient(120deg, rgba(3,12,30,0.95), rgba(8,24,60,0.9));
                        color: #ffffff;
                        font-size: 45px;
                        font-family: monospace;
                        font-weight: bold;
                        padding: 25px 50px;
                        border-radius: 20px;
                        width: fit-content;
                        margin: 80px auto;
                        text-align: center;
                    ">
                        ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}
                    </p>
                </div>
            `;
        }, 1000);
