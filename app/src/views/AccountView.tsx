const AccountView = () => {
  let data = [
    {label: "First name", content: "John"},
    {label: "Last name", content: "Doe"},
    {label: "Email", content: "john.doe@example.com"}
  ]

  return (<div>
    <h1>Account View</h1>
    {/* create elements here */}
    {data.map(dataElements => {
      return (<div>
        <span>{dataElements.label}</span>
        <span>{dataElements.content}</span>

      </div>)
    })}
  </div>)
}

export default AccountView