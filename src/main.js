const getFetch = async () => {
  try {
    const get = await fetch("https://awbgpfdbbwgppkweujee.supabase.co/rest/v1/article?select=*", {
      headers: {
        apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3YmdwZmRiYndncHBrd2V1amVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4NjI1MTEsImV4cCI6MjA2NDQzODUxMX0.N5wGStkM4CxUvK9IghvfLNK74Pqi7Z-uMUJ2arH8NPg",
      },
    });

    let supabase = await get.json();

    supabase.forEach((value) => {
      const div = document.createElement("div");
      const p1 = document.createElement("p");
      p1.innerHTML = `Autor: ${value.author}`;
      div.appendChild(p1);
      const p2 = document.createElement("p");
      p2.innerHTML = `Podtytuł: ${value.subtitle}`;
      div.appendChild(p2);
      const p3 = document.createElement("p");
      p3.innerHTML = `Tytuł: ${value.title}`;
      div.appendChild(p3);
      const p4 = document.createElement("p");
      p4.innerHTML = `Data stworzenia: ${value.created_at}`;
      div.appendChild(p4);
      const p5 = document.createElement("p");
      p5.innerHTML = `Zawartość: ${value.content}`;
      div.appendChild(p5);
      document.getElementById("app").appendChild(div);
    });
  } catch (err) {
    console.error(err.message);
  }
};


window.onload =async ()=>{await getFetch()};

const postFetch = async (dane) => {
  try {
    const post = await fetch("https://awbgpfdbbwgppkweujee.supabase.co/rest/v1/article", {
      method: "POST",
      headers: {
        apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3YmdwZmRiYndncHBrd2V1amVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4NjI1MTEsImV4cCI6MjA2NDQzODUxMX0.N5wGStkM4CxUvK9IghvfLNK74Pqi7Z-uMUJ2arH8NPg",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dane),
    });
  } catch (err) {
    console.error(err.message);
  }
};

const form = document.getElementById("postForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const dane = {
    title: e.target["title"].value,
    author: e.target["author"].value,
    subtitle: e.target["subtitle"].value,
    content: e.target["content"].value,
  };
  await postFetch(dane);
});