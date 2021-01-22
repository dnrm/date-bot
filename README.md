# 🤖 Date Bot

Discord bot to tell you the date and time.

## Commands:
```!date```  Shows the date

## How to deploy

1. Clone the repository
```git
git clone https://github.com/dnrm/date-bot
```

2. Change directory
```
cd date-bot
```

3. Install dependencies
```
npm install
```

4. Create .env file and set your token
```
TOKEN=<your token>
```

5. Execute
```
node .
```

[Bonus] Daemonize and run forever
```
npm i -g forever
```

```
forever start index.js
```
