import Item from "./Item";

const List = ({ listData, deleteData, submittingState }) => {
  console.log("listData", listData);
  return (
    <>
      <main>
        <ol className="gradient-list">
          {
            listData.map((items) => {
              const { firstName, lastName, id } = items;
              return (
                <Item
                  key={id}
                  id={id}
                  firstName={firstName}
                  lastName={lastName}
                  deleteData={deleteData}
                  submittingState={submittingState}
                />
              );
            })
            // <Item key={items} />
          }
        </ol>
      </main>
    </>
  );
};

export default List;
