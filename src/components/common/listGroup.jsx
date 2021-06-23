// 1. paduoti reikalinga info i listGroup

// 2. list group pasidaryti saraso jsx

// 3. dinamiskai sugeneruoti tiek el kiek yra genres

// 4. movie table sukurti metoda kuris nustato zanra

// 5. iskviesti ta metoda is listGroup componento

// 6. movieTable sukurti state savybe currentGenre

// 7. pakeisti zanra paspaudus ant saraso el

// 8. rodyti zanra kuris yra nustatytas melynam fone (pan kaip pagination)

// 9. padaryti kad rodytu tik tuos filmus kurie attitinka pasirinkta zanra

// 10. prideti 'All genres' pasirinkima

const ListGroup = (props) => {
  const { items } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={item._id} className="list-group-item">
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
