import "./styles.css";

const lang1 = {
  title: "HTML",
  author: "Dan Brown",
  category: "web development"
};

const lang2 = {
  title: "CSS",
  author: "Robin Cook",
  category: "web development"
};

const lang3 = {
  title: "JavaScript",
  author: "Dan Brown",
  category: "programming"
};

const table = [
  { courseName: "PHP", category: "server side", author: "Richard James" },
  {
    courseName: "Angular6",
    category: "Web development",
    author: "Kirk Hamett"
  },
  { courseName: "Node.js", category: "server side js", author: "Ryan Dahl" },
  { courseName: "Bootstrap", category: "UI development", author: "Mark Hill" },
  { courseName: "Python", category: "Programming", author: "Guido Van Rossum" }
];
function exercise1() {
  const langCards = [lang1, lang2, lang3];
  return (
    <div className="mainDiv">
      <section className="section1">
        <h2 style={{ textAlign: "center", color: "brown" }}>
          Featured Courses
        </h2>
        <br />
        <div className="cardHeader">
          {langCards.map((lCard) => (
            <div className="card">
              <h5 style={{ textAlign: "center" }}>
                <b>{lCard.title}</b>
              </h5>
              <span id="content" style={{ color: "grey", textAlign: "left" }}>
                Author:{lCard.author}
              </span>
              <br />
              <span id="content" style={{ color: "grey", textAlign: "left" }}>
                Category:{lCard.category}
              </span>
              <br />
              <br />
              <button className="btn">Summary</button>
            </div>
          ))}
        </div>
      </section>

      <section className="section2">
        <h2 style={{ textAlign: "center", color: "blue" }}>Course Catalog</h2>
        <br />
        <br />
        <table border="1">
          <thead>
            <td>Course Name</td>
            <td>Category</td>
            <td>Author</td>
          </thead>
          <tbody>
            {table.map((element) => (
              <tr>
                <td>{element.courseName}</td>
                <td>{element.category}</td>
                <td>{element.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default exercise1;
