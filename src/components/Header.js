import Button from "./Button";

const Header = () => {

  const onClick = (e) => {
    alert("click");
  };
  
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button color="green" text="Add" onClick={onClick}/>
    </header>
  );
};

export default Header;
