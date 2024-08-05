export default defineEventHandler(async (event) => {
<% if (subName) { %>
  return await callGetToServer(event, '/api/<%= urlpath %>', '<%= subName %>');
<% } else { %>
  return await callGetToServer(event, '/api/<%= urlpath %>');
<% } %>
});