async function getAllCSharpQuestions()
{
    let res = await fetch('https://abarcajflashcardbackend.azurewebsites.net/Csharp/GetAllCsharpFlashCards');
    let data = await res.json();
    return data;
}

async function getAllHtmlQuestions()
{
    let res = await fetch('https://abarcajflashcardbackend.azurewebsites.net/Html/GetAllHtmlFlashCards');
    let data = await res.json();
    return data;
}


async function getCsharpQuestionById(id){
    let res = await fetch(`https://abarcajflashcardbackend.azurewebsites.net/Csharp/GetCsharpCardById/`+id, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify()
    });

    if(!res.ok)
    {
        const message = `An error has occured ${res.status}`
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data)
    return data;
}


async function getHtmlQuestionById(id){
    let res = await fetch(`https://abarcajflashcardbackend.azurewebsites.net/Html/GetHtmlCardById/`+id, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify()
    });

    if(!res.ok)
    {
        const message = `An error has occured ${res.status}`
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data)
    return data;
}

async function getRandomCsharpQuestionId(min, max){
    let res = await fetch(`https://abarcajflashcardbackend.azurewebsites.net/Csharp/RandomCsharpId/`+min + "/" +max, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify()
    });

    if(!res.ok)
    {
        const message = `An error has occured ${res.status}`
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data)
    return data;
}

async function getRandomHtmlQuestionId(min, max){
    let res = await fetch(`https://abarcajflashcardbackend.azurewebsites.net/Html/RandomHtmlId/`+min + "/" +max, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify()
    });

    if(!res.ok)
    {
        const message = `An error has occured ${res.status}`
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data)
    return data;
}



export { getAllCSharpQuestions, getAllHtmlQuestions, getCsharpQuestionById, getHtmlQuestionById, getRandomCsharpQuestionId, getRandomHtmlQuestionId };