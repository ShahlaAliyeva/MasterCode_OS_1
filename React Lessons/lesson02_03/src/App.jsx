import Card from "./Card";

function App() {
  return (
    <div className="container">
      <Card
        cardImg="dark-night_wallpaper.jpg"
        cardTitle="Shehla Eliyeva"
        cardDescription="Props example"
        skills={[
          {
            skillBgColor: "red",
            skillContent: "HTML",
          },
          {
            skillBgColor: "blue",
            skillContent: "CSS",
          },
          {
            skillBgColor: "chocolate",
            skillContent: "JS",
          },
        ]}
      />
      <Card
        cardImg="pexels-eberhard-grossgasteiger-1292115.jpg"
        cardTitle="Zehra Letif"
        cardDescription="Props example 2"
        skills={[
          {
            skillBgColor: "yellow",
            skillContent: "React",
          },
          {
            skillBgColor: "red",
            skillContent: "Java",
          },
          {
            skillBgColor: "lime",
            skillContent: "C#",
          },
        ]}
      />
    </div>
  );
}

export default App;

//! JSX qaydalari
//* 1. 1 root elementi olmalidir (<></> -> React Fragment)
/*<React.Fragment>
      <h1>Hello Vite</h1>
      <h2>Vite + React</h2>
</React.Fragment>*/

//* 2. Reactda butun teqler baglanmalidir (HTML -> <img>, React -> <img />)
//* 3. HTML -> class, onclick, onmouseover, onmouseout; React -> className, onClick, onMouse...
//! 4. data-userID eyni HTML-de oldugu kimi yazilir

//! SPA -> Single Page Application
