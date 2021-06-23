// statless functional component
const Pagination = (props) => {
  const { itemCount, pageSize } = props;
  // ic 9 ps 4
  // [1, 2, 3]
  const pageCount = Math.ceil(itemCount / pageSize);
  console.log('pageCount', pageCount);
  // jei tik vienas psl nerodom puslapiavimo
  if (pageCount === 1) return null;

  const pages = () => {
    const arr = [];
    for (let i = 1; i <= pageCount; i++) {
      arr.push(i);
    }
    return arr;
  };

  console.log(pages());

  return (
    <nav>
      <ul className="pagination">
        {pages().map((pageNum) => (
          <li key={pageNum} className="page-item">
            <a href="/" className="page-link">
              {pageNum}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
