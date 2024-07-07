const Form = ({ handleSubmit, children }) => {
  const onSubmit = (event) => {
    event.preventDefault()
    handleSubmit();
  }
  
  return (
    <form onSubmit={onSubmit}>
      {children}
      <input type="submit" />
    </form>
  );
};

export default Form;
