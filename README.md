# form-to-pdf-template-service
Template service that compiles data into HTML templates and returns static pages with data already populated

## Database entry structure

```
{
  template: "<!DOCTYPE html><html lang=\"en\"><head> <meta charset=\"UTF-8\"> <title><%=title %></title></head><body> <h1>This is the first contract</h1> <ol> <li>This is a list item <%=listNoItem %></li><li>This is a list item <%=listNoItem %></li><li>This is a list item <%=listNoItem %></li></ol> <p class=\"firstname\"><%=firstname %></p><p class=\"lastname\"><%=lastname %></p></body></html>",
  tags: ["companies", "contract", "legal", "SRL"]
}
```
