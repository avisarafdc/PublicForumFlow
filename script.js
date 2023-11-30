const textarea = document.querySelector("textarea"),
fileNameInput = document.querySelector(".file-name input"),
saveBtn = document.querySelector(".save-btn");
const title = document.querySelector('.c1l1');
const title1 = document.querySelector('.c1l2');
const names = ["begin"]

function justify(val)
{
    t = 50 - val.length
    for(let i = 0; i<t; i++)
    {
        val = val + " "
    }
    return val + "|"
}
for (let i = 0; i < 36; i++)
{
    for(let m = 0; m < 8; m++)
    {
        names.push(".c"+String(m+1)+"l"+String(i+1))
    }
    names.push("nl")
}

saveBtn.addEventListener("click", (event) => {
        const list = [fileNameInput.value + "\n \n"];
        // list.push(title.value)
        // list.push("\n")
        for (let i = 0; i < 295; i++)
        {
            if (names[i+1] === "nl")
            {
                list.push("\n")
                //list.push("\n")
            }
            else
            {
                const temp = document.querySelector(names[i+1])
                list.push(justify(temp.value)) 
                //list.push("\n")  
            } 
        }
        // list.push(title1.value) application/vnd.ms-excel 
        // const blob = new Blob(list, {type: "text/plain"});
        const blob = new Blob(list, {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});

        const fileUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = fileNameInput.value;
        link.href = fileUrl;
        link.click();

})
