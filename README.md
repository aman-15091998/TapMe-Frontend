# TapMe

## Introduction

**TapMe** is a simple Telegram game developed using React, GraphQL, and PostgreSQL (Supabase). Players can tap to earn points and progress to the next level.

## Installation

First set up the backend from [here](https://github.com/aman-15091998/TapMe-Backend). Then follow the steps to set up the frontend

1. Open VS Code
2. Open terminal
3. **Clone the repository**:
   ```bash
   git clone https://github.com/aman-15091998/TapMe-Frontend.git
   ```
4. Move inside the folder
5. Update the backend url with http://localhost:4000/

```bash
export const client = new ApolloClient({
    uri: 'UPDATE_THIS', // backend server url
    cache: new InMemoryCache(),
  });
```

7. npm i
8. npm start
