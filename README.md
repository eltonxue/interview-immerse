# Immerse Interview
For this exercise, I created a table given an API endpoint that returns a JSON object with a list of contacts as a key-value pair.

# Instructions
1. Clone the repo onto your desktop
2. Navigate into the repo in Terminal
3. Run the command
```yarn```
4. Run the command
```yarn start```
5. Navigate to ```http://localhost:3000```

# About

The response is formatted as such:
```
{
  contacts: [
    {
      url: 'https://www.image.com/eltonxue',
      firstName: 'Elton',
      lastName: 'Xue',
      email: 'eltonxue@gmail.com'
    },
    ...
  ]
}
```

To visual this, I followed the Container, Presenter pattern to produce the following table:

# Screenshots

![Alt text](https://raw.githubusercontent.com/eltonxue/interview-immerse/master/assets/readme_ss.png)

# Packages Used
- Axios
- Prop-types
