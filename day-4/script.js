const quote = document.getElementById("quote");
const author = document.getElementById("author");
const loading = document.getElementById("loading");
const btn = document.getElementById("btn");

async function getQuote(){

    loading.textContent = "Loading...";

    quote.textContent = "";

    author.textContent = "";

    try{
 
        const response = await fetch("https://dummyjson.com/quotes");

        if(!response.ok){
            throw new Error("Unable to fetch quotes");
        }

        const data = await response.json();

        const random = Math.floor(Math.random()*data.quotes.length);

        quote.textContent = `"${data.quotes[random].quote}"`;

        author.textContent = `~ ${data.quotes[random].author}`;

    }

    catch(error){

        quote.textContent = "❌ Failed to load quotes.";

        author.textContent = "";

    }

    finally{

        loading.textContent = "";

    }

}

btn.addEventListener("click",getQuote);

window.onload=getQuote;