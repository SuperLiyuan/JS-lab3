import express from "express";
const app = express(); 
const PORT = 3000; 


app.get('/', (req, res) => {
  const groupNames = "Group 11"
  let html = '<h1>Our Groups</h1><ul>';
  let members = ['Liyuan Luo', 'Isabela Tatai', 'Yu Bao']
  let list = members.map(member => `<li>${member}</li>`).join('');
  list += '</ul>';
  html += list;
  res.send(html);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
